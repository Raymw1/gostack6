const { Order, Size, Type, Product } = require("../models");
const OrderMail = require("../jobs/OrderMail");
const Queue = require("../services/QueueService");

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
    Queue.create(OrderMail.key, {
      orderId: order.id,
      username: req.user.name,
      email: req.user.email,
    }).save();
    return res.status(201).json({ order });
  }

  async update(req, res) {
    const { order } = req;
    await order.update(req.body);
    if (req.body.sizes) {
      await order.setSizes(req.body.sizes);
    }
    return res.status(201).json({ order });
  }

  async destroy(req, res) {
    await req.order.destroy();
    return res.status(204).json();
  }
}

module.exports = new OrderController();
