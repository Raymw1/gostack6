const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");
const multerConfig = require("../config/multer");
const upload = require("multer")(multerConfig);

const controllers = require("../app/controllers");
const validators = require("../app/validators");
const middlewares = require("../app/middlewares");

routes.get(
  "/:product_id/types/",
  middlewares.productMiddleware,
  handle(controllers.TypeController.index)
);
routes.get(
  "/:product_id/types/:id",
  middlewares.productMiddleware,
  middlewares.typeMiddleware,
  handle(controllers.TypeController.show)
);
routes.use(middlewares.providerMiddleware);
routes.post(
  "/:product_id/types/",
  middlewares.productMiddleware,
  upload.single("file"),
  validate(validators.Type),
  handle(controllers.TypeController.store)
);
routes.put(
  "/:product_id/types/:id",
  middlewares.productMiddleware,
  middlewares.typeMiddleware,
  upload.single("file"),
  handle(controllers.TypeController.update)
);
routes.delete(
  "/:product_id/types/:id",
  middlewares.productMiddleware,
  middlewares.typeMiddleware,
  handle(controllers.TypeController.destroy)
);

module.exports = routes;
