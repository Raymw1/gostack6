const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => res.render("index"));

routes.post("/check", (req, res) => {
  const { age } = req.body;
  if (!age?.trim() || age < 0 || !(age / 1)) return res.redirect("/");
  return age >= 18
    ? res.redirect(`/major?age=${age}`)
    : res.redirect(`/minor?age=${age}`);
});

const ageMiddleware = (req, res, next) => {
  if (!req.query.age) return res.redirect("/");
  return next();
};

routes.get("/major", ageMiddleware, (req, res) =>
  res.render("result", {
    result: `Você é maior de idade e possui ${req.query.age} anos`,
  })
);

routes.get("/minor", ageMiddleware, (req, res) =>
  res.render("result", {
    result: `Você é menor de idade e possui ${req.query.age} anos`,
  })
);

module.exports = routes;
