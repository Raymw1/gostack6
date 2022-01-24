const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");
const multerConfig = require("../config/multer");
const upload = require("multer")(multerConfig);

const controllers = require("../app/controllers");
const validators = require("../app/validators");
const middlewares = require("../app/middlewares");

routes.get("/", handle(controllers.ProductController.index));
routes.get("/:id", handle(controllers.ProductController.show));

routes.use(
  "/:product_id/types",
  middlewares.productMiddleware,
  require("./types")
);

routes.use(middlewares.providerMiddleware);
routes.post(
  "/",
  upload.single("file"),
  validate(validators.Product),
  handle(controllers.ProductController.store)
);
routes.put(
  "/:id",
  upload.single("file"),
  handle(controllers.ProductController.update)
);
routes.delete("/:id", handle(controllers.ProductController.destroy));

module.exports = routes;
