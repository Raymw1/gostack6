"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        title: "Bebidas não alcoólicas",
        file_id: 1,
        description: "Refrigerantes, sucos, chá gelado, energéticos e água.",
        preparation_time: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Bebidas",
        file_id: 2,
        description: "Cervejas artesanais, vinhos e destilados.",
        preparation_time: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Calzones",
        file_id: 3,
        description:
          "Calzones super recheados com mais de 50 sabores diferentes.",
        preparation_time: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Massas",
        file_id: 4,
        description:
          "10 tipos de massas com diferentes molhos para te satisfazer.",
        preparation_time: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Pizzas",
        file_id: 5,
        description:
          "Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.",
        preparation_time: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
