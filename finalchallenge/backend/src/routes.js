const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");

const controllers = require("./app/controllers");
const validators = require("./app/validators");

// routes.post("/test", validate(), handle(controllers.test.store))

routes.post(
  "/users",
  validate(validators.User),
  handle(controllers.UserController.store)
);

routes.post("/sessions", handle(controllers.SessionController.store));

module.exports = routes;
