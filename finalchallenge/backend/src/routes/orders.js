const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");

const controllers = require("../app/controllers");
const validators = require("../app/validators");
const middlewares = require("../app/middlewares");

routes.get("/orders", handle(controllers.OrderController.index));
routes.get(
  "/orders/:id",
  middlewares.orderMiddleware,
  handle(controllers.OrderController.show)
);
routes.post(
  "/orders",
  validate(validators.Order),
  middlewares.orderMiddleware,
  handle(controllers.OrderController.store)
);

routes.use("/products", require("./products"));

routes.use(middlewares.providerMiddleware);
routes.put("/orders/:id", handle(controllers.OrderController.update));
routes.delete("/orders/:id", handle(controllers.OrderController.destroy));

module.exports = routes;
