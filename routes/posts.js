const express = require("express");
const routes = express.Router();
const Post = require("../models/Post");

// Display al data from database
routes.get("/", async (req, res) => {
  try {
    const SavedPost = await Post.find();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Sending Data from database
routes.post("/", async (req, res) => {
  const Mypost = new Post({
    title: req.body.title,
    description: req.body.description,
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

// UPPDATE A POST

routes.patch("/:postId", async (req, res) => {
  try {
    const update = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(update);
  } catch (err) {
    res.json(err);
  }
});

module.exports = routes;
