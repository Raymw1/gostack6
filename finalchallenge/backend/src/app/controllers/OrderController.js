const { Order, OrdersSizes, Size, Type, Product } = require("../models");

class OrderController {
  async index(req, res) {
    const orders = await Order.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: OrdersSizes,
          include: {
            model: Size,
            include: { model: Type, include: { model: Product } },
          },
        },
      ],
    });
    return res.json({ orders });
  }

  async show(req, res) {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: OrdersSizes,
          include: {
            model: Size,
            include: { model: Type, include: { model: Product } },
          },
        },
      ],
    });
    if (!order) return res.status(404).json({ error: "Order not found" });
    return res.json({ order });
  }

  async store(req, res) {}

  async update(req, res) {}

  async destroy(req, res) {}
}

module.exports = new OrderController();
