const routes = require("express").Router();
const handle = require("express-async-handler");

const UserController = require("./app/controllers/UserController");

// routes.post("/test", validate(), handle(controllers.test.store))

routes.post("/users", handle(UserController.store));

module.exports = routes;
