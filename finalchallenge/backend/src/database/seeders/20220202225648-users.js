require("dotenv").config();
("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Admin",
        email: process.env.ADMIN_MAIL,
        password_hash: await require("bcryptjs").hash(
          process.env.ADMIN_PASS,
          8
        ),
        provider: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
