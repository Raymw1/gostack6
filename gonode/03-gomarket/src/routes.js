const express = require("express");
const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.get("/test", authMiddleware, (req, res) => res.json({ ok: true }));

module.exports = routes;
