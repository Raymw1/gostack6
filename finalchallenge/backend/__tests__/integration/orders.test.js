const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");
const generateOrders = require("../utils/generateOrders");

const dataOrders = {
  observation: "Test",
  cep: "11111111",
  street: "Test",
  number: 1,
  neighborhood: "Test",
  value: 10,
};

describe("Orders", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to get orders when authenticated", async () => {
    const user = await factory.create("User");
    const orders = await generateOrders(user.id);
    // GET /orders
    const response = await request(app)
      .get("/orders")
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("orders");
    expect(response.body.orders).toHaveLength(orders.length);
  });

  it("should not be able to get orders when user is not authenticated", async () => {
    // GET /orders
    const response = await request(app).get("/orders");
    expect(response.status).toBe(401);
  });

  it("should be able to get order when authenticated", async () => {
    const user = await factory.create("User");
    const orders = await generateOrders(user.id);
    // GET /orders/:id
    const response = await request(app)
      .get(`/orders/${orders[0].id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("order");
    expect(response.body.order).toHaveProperty("id");
    expect(response.body.order.id).toBe(orders[0].id);
  });

  it("should not be able to get order when user is not authenticated", async () => {
    const user = await factory.create("User");
    const orders = await generateOrders(user.id);
    // GET /orders/:id
    const response = await request(app).get(`/orders/${orders[0].id}`);
    expect(response.status).toBe(401);
  });

  it("should be able to order when authenticated", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const sizes = await factory.createMany("Size", 5, { type_id: type.id });
    const sizesIds = sizes.map((size) => size.id);
    // POST /orders { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizesIds });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("order");
    expect(response.body.order).toHaveProperty("id");
  });

  it("should not be able to order when user is not authenticated", async () => {
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const sizes = await factory.createMany("Size", 5, { type_id: type.id });
    const sizesIds = sizes.map((size) => size.id);
    // POST /orders { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .post("/orders")
      .send({ ...dataOrders, sizesIds });
    expect(response.status).toBe(401);
  });

  it("should be able to update order when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const sizes = await factory.createMany("Size", 5, { type_id: type.id });
    const sizesIds = sizes.map((size) => size.id);
    const orders = await generateOrders(user.id);
    // PUT /orders/:id { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .put(`/orders/${orders[0].id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizesIds });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("order");
    expect(response.body.order).toHaveProperty("id");
    expect(response.body.order.id).toBe(orders[0].id);
  });

  it("should not be able to update order when user is not a provider", async () => {
    const user = await factory.create("User");
    const product = await factory.create("Product");
    const type = await factory.create("Type", { product_id: product.id });
    const sizes = await factory.createMany("Size", 5, { type_id: type.id });
    const sizesIds = sizes.map((size) => size.id);
    const orders = await generateOrders(user.id);
    // PUT /orders/:id { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .put(`/orders/${orders[0].id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizesIds });
    expect(response.status).toBe(401);
  });

  it("should be able to delete order when user is a provider", async () => {
    const user = await factory.create("User", { provider: true });
    const orders = await generateOrders(user.id);
    // DELETE /orders/:id
    const response = await request(app)
      .delete(`/orders/${orders[0].id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(204);
  });

  it("should not be able to delete order when user is not a provider", async () => {
    const user = await factory.create("User");
    const orders = await generateOrders(user.id);
    // DELETE /orders/:id
    const response = await request(app)
      .delete(`/orders/${orders[0].id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(401);
  });
});
