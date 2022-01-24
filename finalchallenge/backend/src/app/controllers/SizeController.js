const { File } = require("../models");

class SizeController {
  async index(req, res) {
    const sizes = await req.type.getSizes({ include: "File" });
    return res.json({ sizes });
  }

  async show(req, res) {
    return res.json({ size: req.size });
  }

  async store(req, res) {
    const size = await req.type.createSize(req.body);
    if (req.file)
      await size.createFile({ ...req.file, url: req.file.location });
    return res.status(201).json({ size });
  }

  async update(req, res) {
    const { size } = req;
    await size.update(req.body);
    if (req.file) {
      const file = await File.create({ ...req.file, url: req.file.location });
      await size.setFile(file);
    }
    return res.status(201).json({ size });
  }

  async destroy(req, res) {
    await req.size.destroy();
    return res.json();
  }
}

module.exports = new SizeController();
