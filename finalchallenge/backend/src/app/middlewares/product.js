const { Product } = require("../models");

module.exports = async (req, res, next) => {
  const product = await Product.findByPk(req.params.product_id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  req.product = product;
  return next();
};
