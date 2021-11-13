const request = require("supertest");
const nodemailer = require("nodemailer");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

jest.mock("nodemailer"); // FAKE MODULE

const transport = {
  sendMail: jest.fn(), // FUNCTION MOCK
};

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });
  // ========== beforeEach, beforeAll, afterEach, afterAll ==========

  beforeAll(() => {
    nodemailer.createTransport.mockReturnValue(transport);
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });
    // POST /sessions { email, password }
    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });
    expect(response.status).toBe(200);
  });

  it("should not be able to authenticate with invalid password", async () => {
    const user = await factory.create("User", {
      password: "1231231",
    });
    // POST /sessions { email, !password }
    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });
    expect(response.status).toBe(401);
  });

  it("should not be able to authenticate with invalid email", async () => {
    // POST /sessions { !email }
    const response = await request(app)
      .post("/sessions")
      .send({ email: "anyemail@any.com", password: "any" });
    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });
    // POST /sessions { email, password }
    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });
    expect(response.body).toHaveProperty("token");
  });

  it("shoud be able to access private routes when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });
    // POST /sessions { email, password }
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to access private routes when not authenticated", async () => {
    const response = await request(app).get("/dashboard");
    expect(response.status).toBe(401);
  });

  it("should not be able to access private routes when not authenticated", async () => {
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", "Bearer 123123");
    expect(response.status).toBe(401);
  });

  it("should receive email notification when authenticated", async () => {
    const user = await factory.create("User", { password: "123456" });
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123456" });

    expect(transport.sendMail).toHaveBeenCalledTimes(1);
    expect(transport.sendMail.mock.calls[0][0].to).toBe(
      `${user.name} <${user.email}>`
    );
  });
});
