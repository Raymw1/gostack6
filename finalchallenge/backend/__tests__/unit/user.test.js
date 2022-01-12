const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const { User } = require("../../src/app/models");
const bcrypt = require("bcryptjs");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Rayan",
      email: "rayan@rocketseat.com",
      password: "123456",
    });
    const compareHash = await bcrypt.compare("123456", user.password_hash);
    expect(compareHash).toBe(true);
  });
});
