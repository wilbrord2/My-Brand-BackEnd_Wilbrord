"use strict";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
// ROUTES
const postsRout = require("./routes/message");
const userRout = require("./routes/user");
const userverifiedToken = require("./routes/authverified");
// Middlewares
// bodyParser
app.use(bodyParser.json());
app.use("/messages", postsRout);
app.use("/api/user", userRout);
app.use("/api/access", userverifiedToken);
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Contact-Page");
});

//CONNECT TO db
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

// Listen to the server

app.listen(3000);
