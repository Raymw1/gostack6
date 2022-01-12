const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Rayan",
      email: "rayan1@rocketseat.com",
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
      .send({ email: "test@email.com", password: "123456" });
    expect(response.status).toBe(400);
  });

  it("should not be able to authenticate with invalid password", async () => {
    const user = await User.create({
      name: "Rayan",
      email: "rayan@rocketseat.com",
      password: "123456",
    });
    // POST /sessions { email, password }
    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123123" });
    expect(response.status).toBe(400);
  });
});
