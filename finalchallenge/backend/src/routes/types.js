const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");
const multerConfig = require("../config/multer");
const upload = require("multer")(multerConfig);

const controllers = require("../app/controllers");
const validators = require("../app/validators");
const middlewares = require("../app/middlewares");

routes.get("/", handle(controllers.TypeController.index));
routes.get(
  "/:id",
  middlewares.typeMiddleware,
  handle(controllers.TypeController.show)
);

routes.use("/:type_id/sizes", middlewares.typeMiddleware, require("./sizes"));

routes.use(middlewares.providerMiddleware);
routes.post(
  "/",
  upload.single("file"),
  validate(validators.Type),
  handle(controllers.TypeController.store)
);
routes.put(
  "/:id",
  middlewares.typeMiddleware,
  upload.single("file"),
  handle(controllers.TypeController.update)
);
routes.delete(
  "/:id",
  middlewares.typeMiddleware,
  handle(controllers.TypeController.destroy)
);

module.exports = routes;
