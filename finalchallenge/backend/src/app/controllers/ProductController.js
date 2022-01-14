const { Products } = require("../models");

class ProductController {
  async index(req, res) {
    const products = await Products.findAll();
    return res.json({ products });
  }

  async show(req, res) {}

  async store(req, res) {}

  async update(req, res) {}

  async destroy(req, res) {}
}

module.exports = new ProductController();
