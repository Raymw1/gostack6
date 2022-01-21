const { Type, Product, File } = require("../models");

class ProductController {
  async index(req, res) {
    const types = await req.product.getTypes({ include: "File" });
    return res.json({ types });
  }

  async show(req, res) {
    return res.json({ type: req.type });
  }

  async store(req, res) {
    const type = await req.product.createType(req.body);
    if (req.file)
      await type.createFile({ ...req.file, url: req.file.location });
    return res.status(201).json({ type });
  }

  async update(req, res) {
    const { type } = req;
    await type.update(req.body);
    if (req.file) {
      const file = await File.create({ ...req.file, url: req.file.location });
      await type.setFile(file);
    }
    return res.status(201).json({ type });
  }

  async destroy(req, res) {
    await req.type.destroy();
    return res.json();
  }
}

module.exports = new ProductController();
