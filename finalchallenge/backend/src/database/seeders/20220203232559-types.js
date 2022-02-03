"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("types", [
      {
        title: "Quatro Queijos",
        file_id: 6,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Calabresa",
        file_id: 7,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Frango Frito",
        file_id: 8,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Marguerita",
        file_id: 9,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Peperoni",
        file_id: 10,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Portuguesa",
        file_id: 11,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("types", null, {});
  },
};
