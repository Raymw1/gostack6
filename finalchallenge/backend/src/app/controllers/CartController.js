const { Size } = require("../models");

class CartController {
  async index(req, res) {
    const cart = await Size.findAll({
      where: { id: JSON.parse(req.headers.cart) },
      include: "Type",
    });
    let total = cart
      .map((product) => product.value)
      .reduce((prevValue, currValue) => prevValue * 0.9 + currValue);
    return res.json({ cart, total: total.toFixed(2) });
  }
}

module.exports = new CartController();
