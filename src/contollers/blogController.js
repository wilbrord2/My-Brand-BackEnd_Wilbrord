const Post = require("../models/Post");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dzluvxcys",
  api_key: "611357566974953",
  api_secret: "iCnhy-r8bKVjhmmR_wn1G0_bNCI",
});
// create Blog to database
// const createArticle =
//   (upload.single("image"),
//   async (req, res) => {
//     console.log(req.file);
//     try {
//       const result = await cloudinary.uploader.upload(req.file.path);
//       let SavedPost = new Post({
//         title: req.body.title,
//         description: req.body.description,
//         avatar: result.secure_url,
//         cloudinary_id: result.public_id,
//       });
//       await SavedPost.save();
//       res.json(SavedPost);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });
// Display all Blogs from database
const displayAllArticle = async (req, res) => {
  const allPost = await Post.find();
  if (!allPost) res.json("not found");
  return res.json(allPost);
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
    const image = await Post.findOne({ _id: req.params.blogId });
    if (!image) return res.json("not found");
    await cloudinary.uploader.destroy(image.cloudinary_id);
    await Post.remove({ _id: req.params.blogId });
    return res.json("Successfully deleted");
  } catch (err) {
    return res.json(err);
  }
};

// UPPDATE A POST

// const UpdateArticle =
//   (upload.single("image"),
//   async (req, res) => {
//     try {
//       let title = req.body.title;
//       let description = req.body.description;
//       console.log(title, description);
//       let post = await Post.findById({ _id: req.params.blogId });
//       if (!post) res.json("not found");
//       // Delete image from cloudinary
//       await cloudinary.uploader.destroy(post.cloudinary_id);
//       // Upload image to cloudinary
//       let result;
//       if (req.file) {
//         result = await cloudinary.uploader.upload(req.file.path);
//       }
//       const data = {
//         title: title,
//         description: description,
//         avatar: result?.secure_url || post.avatar,
//         cloudinary_id: result?.public_id || post.cloudinary_id,
//       };
//       console.log(data);
//       const updated = await Post.findByIdAndUpdate(req.params.blogId, data, {
//         new: true,
//       });
//       res.json(updated);
//     } catch (err) {
//       res.json(err);
//     }
//   });
export { displayAllArticle, getSingleArticle, deleteArticle };
