const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(`mongodb://${process.env.DB_URL}:27017/dockerclass`);

app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(3000);

