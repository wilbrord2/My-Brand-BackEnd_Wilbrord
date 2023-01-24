"use strict";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const Post = require("./models/contactMessageScheme");

// ROUTES
const postsRout = require("./routes/message");
// Middlewares
app.use("/messages", postsRout);
// bodyParser
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Contact-Page");
});

app.post("/", async (req, res) => {
  const Mypost = new Post({
    name: req.body.Name,
    email: req.body.Email,
    subject: req.body.Subject,
    Message: req.body.Message,
  });
  try {
    const SavedPost = await Mypost.save();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//CONNECT TO db
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

// Listen to the server

app.listen(3000);
