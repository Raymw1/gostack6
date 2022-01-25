const { Size } = require("../models");

class CartController {
  async index(req, res) {
    const cart = await Size.findAll({
      where: { id: JSON.parse(req.headers.cart) },
    });
    const total = cart
      .map((product) => product.value)
      .reduce((prevValue, currValue) => prevValue + currValue);
    return res.json({ cart, total });
  }
}

module.exports = new CartController();
