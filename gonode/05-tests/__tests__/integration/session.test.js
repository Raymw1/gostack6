const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });
  // ========== beforeAll, afterEach, afterAll ==========

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

  it("should not be able to authenticate with invalid credentials", async () => {
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
});
