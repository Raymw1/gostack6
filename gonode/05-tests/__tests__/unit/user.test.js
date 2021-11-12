const bcryptjs = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await factory.create("User", { password: "123456" });
    const compareHash = await bcryptjs.compare(
      user.password,
      user.password_hash
    );

    expect(compareHash).toBe(true);
  });
});
