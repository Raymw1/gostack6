const routes = require("express").Router();
const handle = require("express-async-handler");
const { validate } = require("express-validation");
const multerConfig = require("../config/multer");
const upload = require("multer")(multerConfig);

const controllers = require("../app/controllers");
const validators = require("../app/validators");
const middlewares = require("../app/middlewares");

routes.get("/", handle(controllers.SizeController.index));
routes.get(
  "/:id",
  middlewares.sizeMiddleware,
  handle(controllers.SizeController.show)
);
routes.use(middlewares.providerMiddleware);
routes.post(
  "/",
  upload.single("file"),
  validate(validators.Size),
  handle(controllers.SizeController.store)
);
routes.put(
  "/:id",
  middlewares.sizeMiddleware,
  upload.single("file"),
  handle(controllers.SizeController.update)
);
routes.delete(
  "/:id",
  middlewares.sizeMiddleware,
  handle(controllers.SizeController.destroy)
);

module.exports = routes;
