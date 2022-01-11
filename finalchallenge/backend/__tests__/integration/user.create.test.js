const request = require("supertest");

const app = require("../../src/server");

// const { User } = require("../../src/app/models");

describe("Create User", () => {
  it("should be able to create user with valid credentials", async () => {
    // POST /users { name, email, password }
    const response = await request(app).post("/users").send({
      name: "Rayan",
      email: "rayan@rocketseat.com",
      password: "123123",
    });
    expect(response.status).toBe(200);
  });

  it("should not be able to create user with empty invalid credentials", async () => {
    // POST /users { name, email }
    const response = await request(app).post("/users").send({
      name: "Rayan",
      email: "rayan1@rocketseat.com",
    });
    expect(response.status).toBe(400);
  });

  // it("should not be able to create user with email already registered", async () => {
  //   // POST /users { name, email, password }
  // });
});
