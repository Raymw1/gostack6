const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const app = express();

nunjucks.configure(path.join(__dirname, "views"), {
  autoescape: true,
  express: app,
  watch: true,
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", ".njk");
app.use(require("./routes"));

app.listen(3000, () => {
  console.log(`Go to http://localhost:3000`);
});
