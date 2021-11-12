const bcryptjs = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

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
    const compareHash = await bcryptjs.compare(
      user.password,
      user.password_hash
    );

    expect(compareHash).toBe(true);
  });
});
