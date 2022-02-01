const factories = require("../factories");

module.exports = async ({ userProvider = false, orders = false }) => {
  const user = await factories.create("User", { provider: userProvider });
  const product = await factories.create("Product");
  const type = await factories.create("Type", { product_id: product.id });
  const sizes = await factories.createMany("Size", 5, { type_id: type.id });
  const sizesId = sizes.map((size) => size.id);
  if (!orders) return { user, product, type, sizes, sizesId };
  const order = await factories.create("Order", { user_id: user.id });
  await order.setSizes(sizesId);
  return { user, product, type, sizes, sizesId, order };
};
