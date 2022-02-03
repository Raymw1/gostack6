"use strict";

const productFiles = [
  {
    originalname: "bebidas_nao_alcoolicas.png",
    key: "products-bebidas_nao_alcoolicas.png",
    url: `${process.env.APP_URL}/files/products-bebidas_nao_alcoolicas.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "bebidas.png",
    key: "products-bebidas.png",
    url: `${process.env.APP_URL}/files/products-bebidas.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "calzones.png",
    key: "products-calzones.png",
    url: `${process.env.APP_URL}/files/products-calzones.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "massas.png",
    key: "products-massas.png",
    url: `${process.env.APP_URL}/files/products-massas.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "pizzas.png",
    key: "products-pizzas.png",
    url: `${process.env.APP_URL}/files/products-pizzas.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("files", [...productFiles]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("files", null, {});
  },
};
