const { factory } = require("factory-girl");
const { User, Product } = require("../src/app/models");
const generateMail = require("./utils/generateMail");

factory.define("User", User, {
  name: "Rayan",
  email: generateMail(),
  password: "123456",
});

factory.define("Product", Product, {
  title: "Test",
  description: "test",
  preparation_time: 5,
});

module.exports = factory;
