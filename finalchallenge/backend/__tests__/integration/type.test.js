const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");

describe("Type", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to get types list when authenticated", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    // GET /products/:product_id/types
    const response = await request(app)
      .get(`/products/${product.id}/types`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
    // expect(response.body).toHaveProperty("types");
  });

  it("should not be able to get types list when not authenticated", async () => {
    const response = await request(app).get("/products/1/types");
    expect(response.status).toBe(401);
  });

  it("should be able to get the type when authenticated", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // GET /products/:product_id/types/:id
    const response = await request(app)
      .get(`/products/${product.id}/types/${type.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to get the type when product does not exist", async () => {
    const user = await factory.create("User");
    // GET /products/:product_id/types/:id
    const response = await request(app)
      .get(`/products/3333/types/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to get the type when type does not exist", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    // GET /products/:product_id/types/:id
    const response = await request(app)
      .get(`/products/${product.id}/types/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to get the type when not authenticated", async () => {
    // GET /products/:product_id/types/:id
    const response = await request(app).get(`/products/1/types/1`);
    expect(response.status).toBe(401);
  });

  it("should be able to create type when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    // POST /products/:product_id/types { title }
    const response = await request(app)
      .post(`/products/${product.id}/types`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("type");
  });

  it("should not be able to create type when user is not authenticated", async () => {
    // POST /products/:product_id/types { title }
    const response = await request(app).post("/products/1/types").send({
      title: "FirstType",
    });
    expect(response.status).toBe(401);
  });

  it("should not be able to create type when user is not a provider", async () => {
    const user = await factory.create("User");
    // POST /products/:product_id/types { title }
    const response = await request(app)
      .post("/products/1/types")
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(401);
  });

  it("should not be able to create type when product does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    // POST /products/:product_id/types { title }
    const response = await request(app)
      .post("/products/1/types")
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(404);
  });

  it("should be able to update type when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // PUT /products/:product_id/types/:id { title }
    const response = await request(app)
      .put(`/products/${product.id}/types/${type.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(201);
  });

  it("should not be able to update type when it does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    // PUT /products/:product_id/types/:id { title }
    const response = await request(app)
      .put(`/products/${product.id}/types/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(404);
  });

  it("should not be able to update type when product does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    // PUT /products/:product_id/types/:id { title }
    const response = await request(app)
      .put(`/products/1/types/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(404);
  });

  it("should not be able to update type when user is not a provider", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // PUT /products/:product_id/types/:id { title }
    const response = await request(app)
      .put(`/products/${product.id}/types/${type.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(401);
  });

  it("should not be able to update type when user is not authenticated", async () => {
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // PUT /products/:product_id/types/:id { title }
    const response = await request(app)
      .put(`/products/${product.id}/types/${type.id}`)
      .send({
        title: "FirstType",
      });
    expect(response.status).toBe(401);
  });

  it("should be able to delete type when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // DELETE /products/:product_id/types/:id
    const response = await request(app)
      .delete(`/products/${product.id}/types/${type.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to delete type when it does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    // DELETE /products/:product_id/types/:id
    const response = await request(app)
      .delete(`/products/${product.id}/types/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to delete type when product does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    // DELETE /products/:product_id/types/:id
    const response = await request(app)
      .delete(`/products/3333/types/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to delete type when user is not a provider", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // DELETE /products/:product_id/types/:id
    const response = await request(app)
      .delete(`/products/${product.id}/types/${type.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to delete type when user is not authenticated", async () => {
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // DELETE /products/:product_id/types/:id
    const response = await request(app).delete(
      `/products/${product.id}/types/${type.id}`
    );
    expect(response.status).toBe(401);
  });
});
