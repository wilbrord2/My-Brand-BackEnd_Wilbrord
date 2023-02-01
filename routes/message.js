const express = require("express");
const routes = express.Router();
const Post = require("./../models/contactMessageScheme");

// Display all data from database
routes.get("/", async (req, res) => {
  try {
    const SavedPost = await Post.find();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// // Sending Data to database
routes.post("/", async (req, res) => {
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

// SEARCH FOR A SPECIFIC POST

routes.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json(err);
  }
});

// delete a specific post
routes.delete("/:postId", async (req, res) => {
  try {
    const removed = await Post.remove({ _id: req.params.postId });
    res.json(removed);
  } catch (err) {
    res.json(err);
  }
});

module.exports = routes;
