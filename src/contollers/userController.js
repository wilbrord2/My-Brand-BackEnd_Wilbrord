import User from "../models/registerSdcheme";
import jwt from "jsonwebtoken";
import { signUpvalidation, signInvalidation } from "../validation/validation";
import bcrypt from "bcryptjs";

const createUser = async (req, res) => {
  // CHECK VALIDATION
  const { error } = signUpvalidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  // CHECK IF EMAIL EXIST
  const existEmail = await User.findOne({ email: req.body.email });
  if (existEmail)
    return res.status(400).json("email Already exist try onother one");

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
    res.status(200).json("Successfully create account You can login now");
  } catch (err) {
    res.status(400).json(err);
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

  const client = req.body;
  const adminemail = "bwilbrord@gmail.com";
  let validPasword, validAdminPassword;

  // CHECK VALIDATION
  const { error } = signInvalidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  // CHECK IF EMAIL EXIST
  const user = await User.findOne({ email: client.email });
  const admin = await User.findOne({ email: adminemail });

  if (!user) return res.status(400).json("email or password does not exist");
  else {
    // CHECK PASSWORD
    validPasword = await bcrypt.compare(req.body.password, user.password);
  }

  if (!admin) return res.status(400).json("email or password does not exist");
  else {
    // CHECK PASSWORD
    validAdminPassword = await bcrypt.compare(req.body.password, user.password);
  }

  if (!validPasword || !validAdminPassword)
    return res.status(400).json("email or password does not exist");
  else {
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("authtoken", token).json(token);
    
  }
};
export { createUser, getAllUsers, getSingleUser, deleteUser, loginUser };
