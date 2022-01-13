const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const generateMail = require("../utils/generateMail");
const factory = require("../factories");

describe("Create User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to create user with valid credentials", async () => {
    // POST /users { name, email, password }
    const response = await request(app).post("/users").send({
      name: "Rayan",
      email: generateMail(),
      password: "123123",
    });
    expect(response.status).toBe(200);
  });

  it("should not be able to create user with empty credentials", async () => {
    // POST /users { name, email }
    const response = await request(app).post("/users").send({
      name: "Rayan",
      email: generateMail(),
    });
    expect(response.status).toBe(400);
  });

  it("should not be able to create user with invalid email", async () => {
    // POST /users { name, email }
    const response = await request(app).post("/users").send({
      name: "Rayan",
      email: "generateMail()@rayan",
      password: "123456",
    });
    expect(response.status).toBe(400);
  });

  it("should not be able to create user with email already registered", async () => {
    const user = await factory.create("User");
    // POST /users { name, email, password }
    const response = await request(app).post("/users").send({
      name: "Ana",
      email: user.email,
      password: "123456",
    });
    expect(response.status).toBe(400);
  });
});
