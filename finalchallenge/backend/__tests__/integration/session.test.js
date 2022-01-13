const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const generateMail = require("../utils/generateMail");
const factory = require("../factories");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await factory.create("User", {
      password: "123456",
    });
    // POST /sessions { email, password }
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123456" });
    expect(response.status).toBe(200);
  });

  it("should not be able to authenticate with invalid email", async () => {
    // POST /sessions { email, password }
    const response = await request(app)
      .post("/sessions")
      .send({ email: generateMail(), password: "123456" });
    expect(response.status).toBe(400);
  });

  it("should not be able to authenticate with invalid password", async () => {
    const user = await factory.create("User");
    // POST /sessions { email, password }
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });
    expect(response.status).toBe(400);
  });

  it("should return JWT token when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123456",
    });
    // POST /sessions { email, password }
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123456" });
    expect(response.body).toHaveProperty("user");
  });

  it("should be able to access private routes when authenticated", async () => {
    const user = await factory.create("User");
    // GET /
    const response = await request(app)
      .get("/")
      .set("Authorization", `Bearer ${await user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to access private routes when not authenticated", async () => {
    // GET /
    const response = await request(app).get("/");
    expect(response.status).toBe(401);
  });
});
