const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

app.use(express.urlencoded({ extended: false }));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true,
});

app.set("view engine", "njk");

const users = ["Rayan Wilbert", "Nicolas Teófilo", "Pedro Maia"];

app.get("/", (req, res) => {
  return res.render("list", { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.post("/new", (req, res) => {
  users.push(req.body.user);
  return res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Go to http://localhost:3000`);
});
