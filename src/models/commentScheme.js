import mongoose from "mongoose";
const commentandlike = mongoose.Schema({
  blogid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CommentAndLike", commentandlike);
