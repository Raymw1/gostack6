const { Order, Size, Type, Product } = require("../models");
const Mail = require("../services/MailService");

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
    await Mail.send({
      from: '"Pizzaria Don Juan" <pizzaria@donjuan.com',
      to: req.user.email,
      subject: `Success on order solicitation: #${order.id}`,
      template: "orders",
      context: { user_name: req.user.name },
    });
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
