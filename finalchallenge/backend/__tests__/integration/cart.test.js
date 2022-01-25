const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");

describe("Cart", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to get products in cart when authenticated", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const sizes = await factory.createMany("Size", 5, { type_id: type.id });
    const sizesId = [sizes[0].id, sizes[4].id];

    // GET /cart { headers: [...ids...] }
    const response = await request(app)
      .get("/cart")
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .set("cart", JSON.stringify(sizesId));
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("cart");
    expect(response.body).toHaveProperty("total");
  });

  it("should not be able to get products in cart when user is not authenticated", async () => {
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const sizes = await factory.createMany("Size", 5, { type_id: type.id });
    const sizesId = [sizes[0].id, sizes[4].id];

    // GET /cart { headers: [...ids...] }
    const response = await request(app)
      .get("/cart")
      .set("cart", JSON.stringify(sizesId));
    expect(response.status).toBe(401);
  });
});
