const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");

describe("Product", () => {
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
    // expect(response.body).toHaveProperty("products");
  });

  it("should not be able to get products list when not authenticated", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBe(401);
  });

  it("should be able to get the product when authenticated", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    // GET /products/:id
    const response = await request(app)
      .get(`/products/${product.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to get the product when not authenticated", async () => {
    // GET /products/:id
    const response = await request(app).get(`/products/1`);
    expect(response.status).toBe(401);
  });

  it("should be able to create product when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    // POST /products { title, thumb, description, preparation_time }
    const response = await request(app)
      .post("/products")
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstProduct",
        description: "Description here",
        preparation_time: 5,
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("product");
  });

  it("should not be able to create product when user is not authenticated", async () => {
    // POST /products { title, thumb, description, preparation_time }
    const response = await request(app).post("/products").send({
      title: "FirstProduct",
      description: "Description here",
      preparation_time: 5,
    });
    expect(response.status).toBe(401);
  });

  it("should not be able to create product when user is not a provider", async () => {
    const user = await factory.create("User");
    // POST /products { title, thumb, description, preparation_time }
    const response = await request(app)
      .post("/products")
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstProduct",
        thumb: "Test",
        description: "Description here",
        preparation_time: 5,
      });
    expect(response.status).toBe(401);
  });
});
