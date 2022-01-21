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

routes.get(
  "/products/:product_id/types",
  middlewares.productMiddleware,
  handle(controllers.TypeController.index)
);
routes.get(
  "/products/:product_id/types/:id",
  middlewares.productMiddleware,
  middlewares.typeMiddleware,
  handle(controllers.TypeController.show)
);

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

routes.post(
  "/products/:product_id/types",
  middlewares.productMiddleware,
  upload.single("file"),
  validate(validators.Type),
  handle(controllers.TypeController.store)
);
routes.put(
  "/products/:product_id/types/:id",
  middlewares.productMiddleware,
  middlewares.typeMiddleware,
  upload.single("file"),
  handle(controllers.TypeController.update)
);
routes.delete(
  "/products/:product_id/types/:id",
  middlewares.productMiddleware,
  middlewares.typeMiddleware,
  handle(controllers.TypeController.destroy)
);

routes.get("/provider", (req, res) => res.send());

module.exports = routes;
