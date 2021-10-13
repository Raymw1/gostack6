const Ad = require("../models/Ad");
const User = require("../models/User");
const Mail = require("../services/Mail");

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;
    const purchaseAd = (await Ad.findById(ad).populate("author")).toJSON();
    if (!purchaseAd) return res.status(400).json({ error: "Ad not found!" });
    const user = (await User.findById(req.userId)).toJSON();
    await Mail.sendMail({
      from: `"Rayan Wilbert" <raymw@raymw.com.br>`,
      to: purchaseAd.author.email,
      subject: `Ordering: ${purchaseAd.title}`,
      template: "purchase",
      context: { user, content, ad: purchaseAd },
    });
    return res.status(204).send();
  }
}

module.exports = new PurchaseController();
