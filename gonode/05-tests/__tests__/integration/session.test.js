const request = require("supertest");
const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });
  // ========== beforeAll, afterEach, afterAll ==========

  it("should be able to authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Rayan",
      email: "rayan@rocketseat.com.br",
      password_hash: "123123",
    });
    // POST /sessions { email }
    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });
    expect(response.status).toBe(200);
  });
});
