const { Order, OrdersSizes, Size, Type, Product } = require("../models");

class OrderController {
  async index(req, res) {
    const orders = await Order.findAll({
      where: { user_id: req.userId },
      include: {
        model: Size,
        include: { model: Type, include: { model: Product } },
      },
    });
    return res.json({ orders });
  }

  async show(req, res) {
    return res.json({ order: req.order });
  }

  async store(req, res) {
    const order = await Order.create({ ...req.body, user_id: req.userId });
    await order.setSizes(req.body.sizes);
    return res.status(201).json({ order });
  }

  async update(req, res) {}

  async destroy(req, res) {}
}

module.exports = new OrderController();
