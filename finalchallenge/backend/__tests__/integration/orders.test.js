const request = require("supertest");
const nodemailer = require("nodemailer");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const factory = require("../factories");
const generateData = require("../utils/generateData");

jest.mock("nodemailer");

const transport = {
  sendMail: jest.fn(),
};

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

  beforeAll(() => {
    nodemailer.createTransport.mockReturnValue(transport);
  });

  it("should be able to get orders when authenticated", async () => {
    const { user, order } = await generateData({ ordersQuantity: 2 });
    const orders = await Promise.all(order);
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
    const { user, order } = await generateData({ ordersQuantity: 1 });
    // GET /orders/:id
    const response = await request(app)
      .get(`/orders/${order.id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("order");
    expect(response.body.order).toHaveProperty("id");
    expect(response.body.order.id).toBe(order.id);
  });

  it("should not be able to get order when user is not authenticated", async () => {
    const { order } = await generateData({ ordersQuantity: 1 });
    // GET /orders/:id
    const response = await request(app).get(`/orders/${order.id}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to get order when order does not exist", async () => {
    const { user } = await generateData({});
    // GET /orders/:id
    const response = await request(app)
      .get("/orders/9999")
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(404);
  });

  it("should be able to order when authenticated", async () => {
    const { user, sizesIds } = await generateData({ ordersQuantity: 1 });
    // POST /orders { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizes: sizesIds });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("order");
    expect(response.body.order).toHaveProperty("id");
  });

  it("should receive email notification when orders a product", async () => {
    const { user, sizesIds } = await generateData({ ordersQuantity: 1 });
    // POST /orders { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizes: sizesIds });
    expect(transport.sendMail).toHaveBeenCalledTimes(1);
  });

  it("should not be able to order when user is not authenticated", async () => {
    const { sizesIds } = await generateData({ ordersQuantity: 1 });
    // POST /orders { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .post("/orders")
      .send({ ...dataOrders, sizes: sizesIds });
    expect(response.status).toBe(401);
  });

  it("should not be able to order when sizes does not exist", async () => {
    const { user } = await generateData({ ordersQuantity: 1 });
    // POST /orders { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizes: [1, 2, 3, 4, 5] });
    expect(response.status).toBe(400);
  });

  it("should be able to update order when user is a provider", async () => {
    const { user, sizesIds, order } = await generateData({
      userProvider: true,
      ordersQuantity: 1,
    });
    // PUT /orders/:id { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .put(`/orders/${order.id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizes: sizesIds });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("order");
    expect(response.body.order).toHaveProperty("id");
    expect(response.body.order.id).toBe(order.id);
  });

  it("should not be able to update order when user is not a provider", async () => {
    const { user, sizesIds, order } = await generateData({
      ordersQuantity: 1,
    });
    // PUT /orders/:id { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .put(`/orders/${order.id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizes: sizesIds });
    expect(response.status).toBe(401);
  });

  it("should not be able to update order when order does not exist", async () => {
    const { user } = await generateData({ userProvider: true });
    // PUT /orders/:id { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .put("/orders/9999")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizes: [] });
    expect(response.status).toBe(404);
  });

  it("should not be able to update order when sizes does not exist", async () => {
    const { user, order } = await generateData({
      userProvider: true,
      ordersQuantity: 1,
    });
    // PUT /orders/:id { observation, cep, street, number, neighborhood, value, sizesIds }
    const response = await request(app)
      .put(`/orders/${order.id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({ ...dataOrders, sizes: [1, 2, 3, 4, 5] });
    expect(response.status).toBe(400);
  });

  it("should be able to delete order when user is a provider", async () => {
    const { user, order } = await generateData({
      userProvider: true,
      ordersQuantity: 1,
    });
    // DELETE /orders/:id
    const response = await request(app)
      .delete(`/orders/${order.id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(204);
  });

  it("should not be able to delete order when user is not a provider", async () => {
    const { user, order } = await generateData({ ordersQuantity: 1 });
    // DELETE /orders/:id
    const response = await request(app)
      .delete(`/orders/${order.id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(401);
  });

  it("should not be able to delete order when order does not exist", async () => {
    const { user } = await generateData({ userProvider: true });
    // DELETE /orders/:id
    const response = await request(app)
      .delete("/orders/9999")
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(404);
  });
});
