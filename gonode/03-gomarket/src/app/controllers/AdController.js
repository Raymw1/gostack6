const Ad = require("../models/Ad");

class AdController {
  async index(req, res) {
    const ads = await Ad.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 20,
        populate: ["author"],
        sort: "-createdAt",
      }
    );
    return res.json(ads);
  }

  async show(req, res) {
    const ad = await Ad.findById(req.params.id);
    return res.json(ad);
  }

  async store(req, res) {
    const ad = await Ad.create({ ...req.body, author: req.userId });
    return res.status(201).json(ad);
  }

  async update(req, res) {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(ad);
  }

  async destroy(req, res) {
    await Ad.findByIdAndDelete(req.params.id);
    return res.status(204).send();
  }
}

module.exports = new AdController();
