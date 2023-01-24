"use strict";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// ROUTES
const postsRout = require("./routes/posts");

// Middlewares
app.use("/posts", postsRout);
// bodyParser
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("we are home");
});

//CONNECT TO db
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

// Listen to the server

app.listen(3000);
