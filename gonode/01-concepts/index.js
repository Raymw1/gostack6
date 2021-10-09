const express = require("express");
const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  req.appName = "GoNode";
  return next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  return res.send(`Welcome to ${req.appName}, ${req.query.name || "World"}!`);
});

app.get("/name/:name", (req, res) => {
  return res.json({ message: `Hello, ${req.params.name}!` });
});

app.listen(3000, () => {
  console.log(`Go to http://localhost:3000`);
});
