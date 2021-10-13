const express = require("express");
const validate = require("express-validation");
const mongoose = require("mongoose");
const Youch = require("youch");
const databaseConfig = require("./config/database");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";
    this.database();
    this.middlewares();
    this.routes();
    this.exception();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useNewUrlParser: true,
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.statusCode).json(err);
      }

      if (process.env.NODE_ENV !== "production") {
        // const youch = new Youch(err, req);
        // return res.send(await youch.toHTML());
        const youch = new Youch(err);
        return res.json(await youch.toJSON());
      }

      return res
        .status(err.statusCode || 500)
        .json({ error: "Internal Server Error!" });
    });
  }
}

module.exports = new App().express;
