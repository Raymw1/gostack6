const { Product } = require("../models");

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({ include: "File" });
    return res.json({ products });
  }

  async show(req, res) {}

  async store(req, res) {
    const product = await Product.create(req.body);
    if (req.file) await product.createFile(req.file);
    return res.status(201).json({ product });
  }

  async update(req, res) {}

  async destroy(req, res) {}
}

module.exports = new ProductController();
