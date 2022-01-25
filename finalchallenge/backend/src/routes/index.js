const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");

const controllers = require("../app/controllers");
const validators = require("../app/validators");
const middlewares = require("../app/middlewares");

routes.post(
  "/users",
  validate(validators.User),
  handle(controllers.UserController.store)
);

routes.post(
  "/sessions",
  validate(validators.Session),
  handle(controllers.SessionController.store)
);

routes.use(middlewares.authMiddleware);

routes.get("/cart", handle(controllers.CartController.index));

routes.use("/products", require("./products"));

routes.use(middlewares.providerMiddleware);

routes.get("/provider", (req, res) => res.send());

module.exports = routes;
