const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");

describe("Size", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to get sizes list when authenticated", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // GET /products/:product_id/types/:type_id/sizes
    const response = await request(app)
      .get(`/products/${product.id}/types/${type.id}/sizes`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
    // expect(response.body).toHaveProperty("types");
  });

  it("should not be able to get sizes list when not authenticated", async () => {
    const response = await request(app).get("/products/1/types/1/sizes");
    expect(response.status).toBe(401);
  });

  it("should be able to get the size when authenticated", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    // GET /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .get(`/products/${product.id}/types/${type.id}/sizes/${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to get the size when product does not exist", async () => {
    const user = await factory.create("User");
    // GET /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .get(`/products/3333/types/3333/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to get the size when type does not exist", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    // GET /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .get(`/products/${product.id}/types/3333/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to get the size when type is not from the correct product", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    const wrongProduct = await factory.create("Product");
    // GET /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .get(`/products/${wrongProduct.id}/types/${type.id}/sizes/${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to get the size when size is not from the correct type", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    const wrongProduct = await factory.create("Product");
    const wrongType = await factory.create("Type", {
      wrongProduct_id: wrongProduct.id,
    });
    // GET /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .get(
        `/products/${wrongProduct.id}/types/${wrongType.id}/sizes/${size.id}`
      )
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to get the size when size does not exist", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // GET /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .get(`/products/${product.id}/types/${type.id}/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to get the size when not authenticated", async () => {
    // GET /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app).get(`/products/1/types/1/sizes/1`);
    expect(response.status).toBe(401);
  });

  it("should be able to create size when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // POST /products/:product_id/types/:type_id/sizes { title, value }
    const response = await request(app)
      .post(`/products/${product.id}/types/${type.id}/sizes`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstSize",
        value: 10,
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("size");
  });

  it("should not be able to create size when user is not authenticated", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // POST /products/:product_id/types/:type_id/sizes { title, value }
    const response = await request(app)
      .post(`/products/${product.id}/types/${type.id}/sizes`)
      .send({
        title: "FirstSize",
        value: 10,
      });
    expect(response.status).toBe(401);
  });

  it("should not be able to create size when user is not a provider", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // POST /products/:product_id/types/:type_id/sizes { title, value }
    const response = await request(app)
      .post(`/products/${product.id}/types/${type.id}/sizes`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstSize",
        value: 10,
      });
    expect(response.status).toBe(401);
  });

  it("should not be able to create size when product does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    // POST /products/:product_id/types/:type_id/sizes { title, value }
    const response = await request(app)
      .post("/products/1/types/1/sizes")
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstSize",
        value: 10,
      });
    expect(response.status).toBe(404);
  });

  it("should not be able to create size when type does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    // POST /products/:product_id/types/:type_id/sizes { title, value }
    const response = await request(app)
      .post(`/products/${product.id}/types/1/sizes`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "FirstSize",
        value: 10,
      });
    expect(response.status).toBe(404);
  });

  it("should be able to update size when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    // PUT /products/:product_id/types/:type_id/sizes/:id { title, value }
    const response = await request(app)
      .put(`/products/${product.id}/types/${type.id}/sizes/${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "SecondSize",
        value: 20,
      });
    expect(response.status).toBe(201);
  });

  it("should not be able to update size when it does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // PUT /products/:product_id/types/:type_id/sizes/:id { title, value }
    const response = await request(app)
      .put(`/products/${product.id}/types/${type.id}/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "SecondSize",
        value: 20,
      });
    expect(response.status).toBe(404);
  });

  it("should not be able to update size when product does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    // PUT /products/:product_id/types/:type_id/sizes/:id { title, value }
    const response = await request(app)
      .put(`/products/3333/types/3333/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        // title: "SecondSize",
        // value: 20,
      });
    expect(response.status).toBe(404);
  });

  it("should not be able to update size when type is not from the correct product", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    const wrongProduct = await factory.create("Product");
    // PUT /products/:product_id/types/:type_id/sizes/:id { title, value }
    const response = await request(app)
      .put(`/products/${wrongProduct.id}/types/${type.id}/sizes${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "SecondSize",
        value: 20,
      });
    expect(response.status).toBe(401);
  });

  it("should not be able to update size when size is not from the correct type", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    const wrongProduct = await factory.create("Product");
    const wrongType = await factory.create("Type", {
      wrongProduct_id: wrongProduct.id,
    });
    // PUT /products/:product_id/types/:type_id/sizes/:id { title, value }
    const response = await request(app)
      .put(`/products/${wrongProduct.id}/types/${wrongType.id}/sizes${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "SecondSize",
        value: 20,
      });
    expect(response.status).toBe(401);
  });

  it("should not be able to update size when user is not a provider", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    // PUT /products/:product_id/types/:type_id/sizes/:id { title, value }
    const response = await request(app)
      .put(`/products/${product.id}/types/${type.id}/sizes/${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`)
      .send({
        title: "SecondSize",
        value: 20,
      });
    expect(response.status).toBe(401);
  });

  it("should not be able to update size when user is not authenticated", async () => {
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    // PUT /products/:product_id/types/:type_id/sizes/:id { title, value }
    const response = await request(app)
      .put(`/products/${product.id}/types/${type.id}/sizes/${size.id}`)
      .send({
        title: "SecondSize",
        value: 20,
      });
    expect(response.status).toBe(401);
  });

  it("should be able to delete size when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .delete(`/products/${product.id}/types/${type.id}/sizes/${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to delete size when it does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .delete(`/products/${product.id}/types/${type.id}/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to delete size when product does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .delete(`/products/3333/types/3333/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to delete size when type does not exist", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .delete(`/products/${product.id}/types/3333/sizes/3333`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should not be able to delete size when type is not from the correct product", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    const wrongProduct = await factory.create("Product");
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .delete(`/products/${wrongProduct.id}/types/${type.id}/sizes/${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to delete size when size is not from the correct type", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    const wrongProduct = await factory.create("Product");
    const wrongType = await factory.create("Type", {
      wrongProduct_id: wrongProduct.id,
    });
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .delete(
        `/products/${wrongProduct.id}/types/${wrongType.id}/sizes/${size.id}`
      )
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to delete size when user is not a provider", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app)
      .delete(`/products/${product.id}/types/${type.id}/sizes/${size.id}`)
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to delete size when user is not authenticated", async () => {
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const size = await factory.create("Size", { type_id: type.id });
    // DELETE /products/:product_id/types/:type_id/sizes/:id
    const response = await request(app).delete(
      `/products/${product.id}/types/${type.id}/sizes/${size.id}`
    );
    expect(response.status).toBe(401);
  });
});
