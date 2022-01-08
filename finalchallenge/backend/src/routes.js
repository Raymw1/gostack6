const routes = require("express").Router();
// const handle = require("express-async-handler");

// routes.post("/test", validate(), handle(controllers.test.store))

routes.get("/", (req, res) => res.send("Hello, World!"));

module.exports = routes;
