const { Product, File } = require("../models");

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({ include: "File" });
    return res.json({ products });
  }

  async show(req, res) {
    const product = await Product.findByPk(req.params.id, { include: "File" });
    if (!product) return res.status(404).json({ error: "Product not found" });
    return res.json({ product });
  }

  async store(req, res) {
    const product = await Product.create(req.body);
    if (req.file)
      await product.createFile({ ...req.file, url: req.file.location });
    return res.status(201).json({ product });
  }

  async update(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    await product.update(req.body);
    if (req.file) {
      const file = await File.create({ ...req.file, url: req.file.location });
      await product.setFile(file);
    }
    return res.status(201).json({ product });
  }

  async destroy(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    await product.destroy();
    return res.json();
  }
}

module.exports = new ProductController();
