import User from "../models/registerSdcheme";
import jwt from "jsonwebtoken";
import { signUpvalidation, signInvalidation } from "../validation/validation";
import bcrypt from "bcryptjs";

const createUser = async (req, res) => {
  // CHECK VALIDATION
  const { error } = signUpvalidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // CHECK IF EMAIL EXIST
  const existEmail = await User.findOne({ email: req.body.email });
  if (existEmail)
    return res.status(400).send("email Already exist try onother one");

  // HASH THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPasword1 = await bcrypt.hash(req.body.password, salt);
  const hashedPasword2 = await bcrypt.hash(req.body.repassword, salt);
  // IF EVERY CHECK IS OK REGISTER
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPasword1,
    repassword: hashedPasword2,
  });
  try {
    const SavedUser = await newUser.save();
    res.json(SavedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const SavedUser = await User.find();

    res.json(SavedUser);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const remomeAUser = await User.remove({ _id: req.params.userId });
    res.json(remomeAUser);
  } catch (err) {
    res.json(err);
  }
  // res.json("testing");
};

const loginUser = async (req, res) => {
  // CHECK VALIDATION
  const { error } = signInvalidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // CHECK IF EMAIL EXIST
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("email does not exist");
  // CHECK PASSWORD
  const validPasword = await bcrypt.compare(req.body.password, user.password);
  if (!validPasword) return res.status(400).send("password does not match");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
};
export { createUser, getAllUsers, getSingleUser, deleteUser, loginUser };
