const request = require("supertest");

const app = require("../../src/server");
// const { User } = require("../../src/app/models");

describe("Create User", () => {
  it("should be able to create user with valid credentials", async () => {
    // POST /users { name, email, password }
    const response = request(app).post("/users").send({
      name: "Rayan",
      email: "rayan@rocketseat.com",
      password_hash: "123123",
    });
    expect(response.status).toBe(200);
  });
});
