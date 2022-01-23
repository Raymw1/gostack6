const { factory } = require("factory-girl");
const { User, Product, Type, Size } = require("../src/app/models");
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

factory.define("Type", Type, {
  title: "Test",
});

factory.define("Size", Size, {
  title: "Test",
  value: 10,
});

module.exports = factory;
