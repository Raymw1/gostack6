const { Order, Size, Type, Product } = require("../models");

module.exports = async (req, res, next) => {
  if (["POST", "PUT"].includes(req.method)) {
    const sizes = await Size.findAll({
      where: { id: req.body.sizes },
    });
    if (sizes.length !== req.body.sizes.length) {
      return res.status(400).json({ error: "Invalid size" });
    }
    if (req.method === "POST") return next();
  }
  const order = await Order.findByPk(req.params.id, {
    include: {
      model: Size,
      include: { model: Type, include: { model: Product } },
    },
  });
  if (!order) return res.status(404).json({ error: "Order not found" });
  req.order = order;
  return next();
};
