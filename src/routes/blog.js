import express from "express";
const Post = require("../models/Post");
import {
  displayAllArticle,
  getSingleArticle,
  deleteArticle,
} from "../contollers/blogController";
import { permission, adminPermissions } from "./permission";
const routes = express.Router();
const upload = require("../utils/multer");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dzluvxcys",
  api_key: "611357566974953",
  api_secret: "iCnhy-r8bKVjhmmR_wn1G0_bNCI",
});

// create Blog to database
routes.post(
  "/createArticle",
  permission,
  upload.single("image"),
  async (req, res) => {
    // console.log(req.file);
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      let SavedPost = new Post({
        title: req.body.title,
        description: req.body.description,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
      });
      await SavedPost.save();
      res.json("saved successfull");
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// Display all Blogs from database
routes.get("/getAllArticle", permission, displayAllArticle);
// SEARCH FOR A SPECIFIC BLOG

routes.get("/getSingleArticle/:blogId", permission, getSingleArticle);

// delete a specific post
routes.delete("/deleteArticle/:blogId", adminPermissions, deleteArticle);

// UPPDATE A POST

routes.patch(
  "/UpdateArticle/:blogId",
  permission,
  upload.single("image"),
  async (req, res) => {
    try {
      let post = await Post.findById({ _id: req.params.blogId });
      console.log("old", post);
      if (!post) res.json("not found");
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinary_id);
      // Upload image to cloudinary
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }
      const data = {
        title: req.body.title,
        description: req.body.description,
        avatar: result?.secure_url || post.avatar,
        cloudinary_id: result?.public_id || post.cloudinary_id,
      };
      console.log(data);
      const updated = await Post.findByIdAndUpdate(req.params.blogId, data, {
        new: true,
      });
      res.json(updated);
    } catch (err) {
      res.json(err);
    }
  }
);
export default routes;
