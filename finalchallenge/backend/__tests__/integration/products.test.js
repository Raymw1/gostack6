const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");

describe("Products", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to get products list when authenticated", async () => {
    const user = await factory.create("User", { provider: true });
    // GET /products
    const response = await request(app)
      .get("/products")
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("products");
  });

  it("should not be able to get products list when not authenticated", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBe(401);
  });

  // it("should be able to get the product", async () => {});
  // it("should not be able to get the product", async () => {});
});
