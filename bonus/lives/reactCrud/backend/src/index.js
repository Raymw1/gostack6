const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

mongoose.connect("mongodb://localhost:27017/livecrud");

app.use(routes);

app.listen(3333);
