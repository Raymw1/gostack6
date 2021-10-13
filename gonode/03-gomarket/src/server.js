const express = require("express");
const mongoose = require("mongoose");
const validate = require("express-validation");
const Youch = require("youch");
const Sentry = require("@sentry/node");
const databaseConfig = require("./config/database");
const sentryConfig = require("./config/sentry");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";
    this.database();
    this.middlewares();
    this.sentry();
    this.routes();
    this.exception();
  }

  sentry() {
    Sentry.init(sentryConfig);
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useNewUrlParser: true,
    });
  }

  middlewares() {
    this.express.use(Sentry.Handlers.requestHandler());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }

  exception() {
    if (process.env.NODE_ENV === "production") {
      this.express.use(Sentry.Handlers.errorHandler());
    }

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
