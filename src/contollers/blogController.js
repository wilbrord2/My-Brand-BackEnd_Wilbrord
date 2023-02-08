const Post = require("../models/Post");

// create Blog to database
const createArticle = async (req, res) => {
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
};
// Display all Blogs from database
const displayAllArticle = async (req, res) => {
  try {
    const SavedPost = await Post.find();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// SEARCH FOR A SPECIFIC BLOG
const getSingleArticle = async (req, res) => {
  try {
    const post = await Post.findById(req.params.blogId);
    res.json(post);
  } catch (err) {
    res.json(err);
  }
};

// delete a specific post
const deleteArticle = async (req, res) => {
  try {
    const removed = await Post.remove({ _id: req.params.blogId });
    res.json(removed);
  } catch (err) {
    res.json(err);
  }
};

// UPPDATE A POST

const UpdateArticle = async (req, res) => {
  try {
    const update = await Post.updateOne(
      { _id: req.params.blogId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(update);
  } catch (err) {
    res.json(err);
  }
};
export {
  createArticle,
  displayAllArticle,
  getSingleArticle,
  deleteArticle,
  UpdateArticle,
};
