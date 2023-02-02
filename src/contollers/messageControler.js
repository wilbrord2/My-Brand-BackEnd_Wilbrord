const Post = require("../models/contactMessageScheme");
const GetAllMessage = async (req, res) => {
  try {
    const SavedPost = await Post.find();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const SaveMessage = async (req, res) => {
  const Mypost = new Post({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    Message: req.body.message,
  });
  try {
    const SavedPost = await Mypost.save();
    res.json(SavedPost);
  } catch (err) {
    res.status(202).json({ message: err.message });
  }
};

const SearchMessage = async (req, res) => {
  try {
    const post = await Post.findById(req.params.messageId);
    res.json(post);
  } catch (err) {
    res.json(err);
  }
};

const deleteMessage = async (req, res) => {
  try {
    const removed = await Post.remove({ _id: req.params.messageId });
    res.json(removed);
  } catch (err) {
    res.json(err);
  }
};
export { GetAllMessage, SaveMessage, SearchMessage, deleteMessage };
