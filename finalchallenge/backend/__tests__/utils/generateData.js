const factories = require("../factories");

module.exports = async ({
  userProvider = false,
  ordersQuantity = 0,
  wrongData = false,
}) => {
  const user = await factories.create("User", { provider: userProvider });
  const product = await factories.create("Product");
  const type = await factories.create("Type", { product_id: product.id });
  const sizes = await factories.createMany("Size", 5, { type_id: type.id });
  const sizesIds = sizes.map((size) => size.id);
  if (!wrongData && ordersQuantity == 0)
    return { user, product, type, sizes, sizesIds };
  const wrongProduct = await factories.create("Product");
  const wrongType = await factories.create("Type", {
    product_id: wrongProduct.id,
  });
  const wrongSizes = await factories.createMany("Size", 5, {
    type_id: wrongType.id,
  });
  if (ordersQuantity == 0)
    return {
      user,
      product,
      type,
      sizes,
      sizesIds,
      wrongProduct,
      wrongType,
      wrongSizes,
    };
  let order = [];
  if (ordersQuantity > 1) {
    for (let i = 0; i < ordersQuantity; i++) {
      order.push(await factories.create("Order", { user_id: user.id }));
    }
  } else {
    order = await factories.create("Order", { user_id: user.id });
    await order.setSizes(sizesIds);
  }
  return {
    user,
    product,
    type,
    sizes,
    sizesIds,
    wrongProduct,
    wrongType,
    wrongSizes,
    order,
  };
};
