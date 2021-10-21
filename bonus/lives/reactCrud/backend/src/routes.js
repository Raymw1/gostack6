const express = require("express");
const routes = express.Router();
const User = require("./User");

routes.get("/users", async (req, res) => {
  const users = await User.find();
  return res.json(users);
});

routes.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
});

routes.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).json(user);
});

routes.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(201).json(user);
});

routes.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(204).json();
});

module.exports = routes;
