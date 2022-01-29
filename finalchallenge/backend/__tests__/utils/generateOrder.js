const factories = require("../factories");

module.exports = async (user_id) => {
  const product = await factories.create("Product");
  const type = await factories.create("Type", { product_id: product.id });
  const sizes = await factories.createMany("Size", 5, { type_id: type.id });
  const sizesId = sizes.map((size) => size.id);
  const order = await factories.create("Order", { user_id });
  await order.setSizes(sizesId);
  return order;
};
