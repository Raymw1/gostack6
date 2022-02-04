"use strict";

const pizzaSizes = (type_id) => [
  {
    title: "Gigante",
    file_id: 12,
    value: Math.floor(Math.random() * 20 + 60),
    type_id,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: "Grande",
    file_id: 13,
    value: Math.floor(Math.random() * 10 + 50),
    type_id,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: "Média",
    file_id: 14,
    value: Math.floor(Math.random() * 10 + 40),
    type_id,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: "Pequena",
    file_id: 15,
    value: Math.floor(Math.random() * 20 + 20),
    type_id,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const generatePizzaSizes = () => {
  let pizzas = [];

  for (let i = 1; i < 7; i++) {
    const sizes = pizzaSizes(i);
    pizzas = [...pizzas, ...sizes];
  }
  return pizzas;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("sizes", await generatePizzaSizes());
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sizes", null, {});
  },
};
