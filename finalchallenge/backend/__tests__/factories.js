const { factory } = require("factory-girl");
const { User } = require("../src/app/models");
const generateMail = require("./utils/generateMail");

factory.define("User", User, {
  name: "Rayan",
  email: generateMail(),
  password: "123456",
});

module.exports = factory;
