const Ad = require("../models/Ad");
const User = require("../models/User");
const Purchase = require("../models/Purchase");
const PurchaseMail = require("../jobs/PurchaseMail");
const Queue = require("../services/Queue");

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;
    const purchaseAd = (await Ad.findById(ad).populate("author")).toJSON();
    if (!purchaseAd) return res.status(400).json({ error: "Ad not found!" });
    const user = (await User.findById(req.userId)).toJSON();
    Queue.create(PurchaseMail.key, { ad: purchaseAd, user, content }).save();
    const purchase = await Purchase.create(req.body);
    return res.json(purchase);
  }

  async update(req, res) {
    const purchase = await Purchase.findById(req.params.purchase).populate(
      "ad"
    );
    if (purchase.ad.purchasedBy)
      return res.status(400).json({ error: "Ad already purchased!" });
    const ad = await Ad.findByIdAndUpdate(
      purchase.ad._id,
      {
        purchasedBy: req.userId,
      },
      { upsert: true, new: true }
    );
    return res.status(201).json(ad);
  }
}

module.exports = new PurchaseController();
