const Ad = require("../models/Ad");
const User = require("../models/User");
const PurchaseMail = require("../jobs/PurchaseMail");
const Queue = require("../services/Queue");

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;
    const purchaseAd = (await Ad.findById(ad).populate("author")).toJSON();
    if (!purchaseAd) return res.status(400).json({ error: "Ad not found!" });
    const user = (await User.findById(req.userId)).toJSON();
    Queue.create(PurchaseMail.key, { ad: purchaseAd, user, content }).save();
    return res.status(204).send();
  }
}

module.exports = new PurchaseController();
