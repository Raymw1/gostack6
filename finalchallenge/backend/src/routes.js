const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const controllers = require("./app/controllers");
const validators = require("./app/validators");
const middlewares = require("./app/middlewares");

// routes.post("/test", validate(), handle(controllers.test.store))

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

routes.get("/products", handle(controllers.ProductController.index));
routes.get("/products/:id", handle(controllers.ProductController.show));

routes.use(middlewares.providerMiddleware);

routes.post(
  "/products",
  upload.single("file"),
  validate(validators.Product),
  handle(controllers.ProductController.store)
);
routes.put(
  "/products/:id",
  upload.single("file"),
  handle(controllers.ProductController.update)
);
routes.delete("/products/:id", handle(controllers.ProductController.destroy));

routes.get("/provider", (req, res) => res.send());

module.exports = routes;
