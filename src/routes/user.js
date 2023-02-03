import express from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteaUser,
  loginUser,
} from "../contollers/userController";
const routes = express.Router();

// check we are on page
routes.get("/register", async (req, res) => {
  res.send("we are on register page");
});

// SIGN-UP

routes.post("/register", createUser);
routes.get("/getAllUser", getAllUsers);
routes.get("/getSingleUser", getSingleUser);
routes.delete("/deleteaUser", deleteaUser);

//LOGIN
routes.post("/login", loginUser);

export default routes;
