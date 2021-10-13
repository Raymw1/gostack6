const Ad = require("../models/Ad");
const User = require("../models/User");
const Mail = require("../services/Mail");

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;
    const purchaseAd = await Ad.findById(ad).populate("author");
    if (!purchaseAd) return res.status(400).json({ error: "Ad not found!" });
    const user = await User.findById(req.userId);
    await Mail.sendMail({
      from: `"${user.name}" <${user.email}>`,
      to: purchaseAd.author.email,
      subject: `Ordering: ${purchaseAd.title}`,
      html: `<p>${content}</p>`,
    });
    return res.status(204).send();
  }
}

module.exports = new PurchaseController();
