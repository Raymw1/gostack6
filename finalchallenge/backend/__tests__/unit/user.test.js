const request = require("supertest");

const truncate = require("../utils/truncate");
const app = require("../../src/server");
const { User } = require("../../src/app/models");
const bcrypt = require("bcryptjs");
const generateMail = require("../utils/generateMail");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Rayan",
      email: generateMail(),
      password: "123456",
    });
    const compareHash = await bcrypt.compare("123456", user.password_hash);
    expect(compareHash).toBe(true);
  });

  it("should generate JWT token", async () => {
    const user = await User.create({
      name: "Rayan",
      email: generateMail(),
      password: "123456",
    });
    const token = await user.generateToken();
    expect(!!token).toBe(true);
  });
});
