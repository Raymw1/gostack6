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

const typeFiles = [
  {
    originalname: "4queijos.png",
    key: "pizzas-4queijos.png",
    url: `${process.env.APP_URL}/files/pizzas-4queijos.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "calabresa.png",
    key: "pizzas-calabresa.png",
    url: `${process.env.APP_URL}/files/pizzas-calabresa.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "frangofrito.png",
    key: "pizzas-frangofrito.png",
    url: `${process.env.APP_URL}/files/pizzas-frangofrito.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "marguerita.png",
    key: "pizzas-marguerita.png",
    url: `${process.env.APP_URL}/files/pizzas-marguerita.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "peperoni.png",
    key: "pizzas-peperoni.png",
    url: `${process.env.APP_URL}/files/pizzas-peperoni.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "portuguesa.png",
    key: "pizzas-portuguesa.png",
    url: `${process.env.APP_URL}/files/pizzas-portuguesa.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const sizeFiles = [
  {
    originalname: "pizza-gg.png",
    key: "tamanhos-pizza-gg.png",
    url: `${process.env.APP_URL}/files/tamanhos-pizza-gg.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "pizza-g.png",
    key: "tamanhos-pizza-g.png",
    url: `${process.env.APP_URL}/files/tamanhos-pizza-g.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "pizza-m.png",
    key: "tamanhos-pizza-m.png",
    url: `${process.env.APP_URL}/files/tamanhos-pizza-m.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    originalname: "pizza-p.png",
    key: "tamanhos-pizza-p.png",
    url: `${process.env.APP_URL}/files/tamanhos-pizza-p.png`,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("files", [
      ...productFiles,
      ...typeFiles,
      ...sizeFiles,
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("files", null, {});
  },
};
