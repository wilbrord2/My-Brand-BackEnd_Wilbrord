const commenteandlike = require("../models/commentScheme");

const addcommentandlike = async (req, res) => {
  const CommenteandLike = new commenteandlike({
    blogid: req.body.id,
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    likes: req.body.likes,
  });
  try {
    const SavedcommLike = await CommenteandLike.save();
    res.status(200).json(SavedcommLike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getAllCommentandlike = async (req, res) => {
  try {
    const Savedcommenteandlike = await commenteandlike.find();

    res.status(200).json(Savedcommenteandlike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { addcommentandlike, getAllCommentandlike };
