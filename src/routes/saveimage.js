import express from "express";
const upload = require("../utils/multer");
import cloudinaryScheme from "../models/cloudinaryScheme";
const routes = express();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dzluvxcys",
  api_key: "611357566974953",
  api_secret: "iCnhy-r8bKVjhmmR_wn1G0_bNCI",
});
// Route to handle the file upload
routes.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    let savedImage = new cloudinaryScheme({
      blogid: req.body.id,
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await savedImage.save();
    res.json(savedImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

routes.get("/images", async (req, res) => {
  const allImage = await cloudinaryScheme.find();
  res.json(allImage);
});

routes.delete("/deleteimage/:id", async (req, res) => {
  try {
    const image = await cloudinaryScheme.findOne({ _id: req.params.id });
    await cloudinary.uploader.destroy(image.cloudinary_id);
    await image.remove();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

routes.put("/updateimage/:id", upload.single("image"), async (req, res) => {
  try {
    let user = await cloudinaryScheme.findById({ _id: req.params.id });
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      blogid:req.body.id || user.blogid,
      name: req.body.name || user.name,
      avatar: result?.secure_url || user.avatar,
      cloudinary_id: result?.public_id || user.cloudinary_id,
    };
    user = await cloudinaryScheme.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

routes.get("/getoneimage/:id", async (req, res) => {
  try {
    // Find user by id
    let user = await cloudinaryScheme.findById({ _id: req.params.id });
    res.json(user); 
  } catch (err) {
    console.log(err);
  }
});

export default routes;
