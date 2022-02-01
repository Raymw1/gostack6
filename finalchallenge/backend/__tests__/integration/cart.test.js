const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");
const generateData = require("../utils/generateData");

describe("Cart", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to get products in cart when authenticated", async () => {
    const { user, sizesIds } = await generateData({});
    // GET /cart { headers: [...ids...] }
    const response = await request(app)
      .get("/cart")
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .set("cart", JSON.stringify(sizesIds));
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("cart");
    expect(response.body).toHaveProperty("total");
  });

  it("should not be able to get products in cart when user is not authenticated", async () => {
    const { sizesIds } = await generateData({});
    // GET /cart { headers: [...ids...] }
    const response = await request(app)
      .get("/cart")
      .set("cart", JSON.stringify(sizesIds));
    expect(response.status).toBe(401);
  });
});
