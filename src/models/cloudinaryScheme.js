import mongoose from "mongoose";
const saveimage = new mongoose.Schema({
  blogid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("images", saveimage);
