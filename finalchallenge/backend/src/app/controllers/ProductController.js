const { Products } = require("../models");

class ProductController {
  async index(req, res) {
    const products = await Products.findAll();
    return res.json({ products });
  }

  async show(req, res) {}

  async store(req, res) {
    try {
      // const product = await Products.create(req.body);
      return res.status(201).json({ body: req.body, file: req.file });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Something went wrong, try again!" });
    }
  }

  async update(req, res) {}

  async destroy(req, res) {}
}

module.exports = new ProductController();
