import express from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  loginUser,
} from "../contollers/userController";
const routes = express.Router();

// check we are on page
routes.get("/register", async (req, res) => {
  res.send("we are on register page");
});

// SIGN-UP

routes.post("/createUser", createUser);
routes.get("/getAllUsers", getAllUsers);
routes.get("/getSingleUser/:userId", getSingleUser);
routes.delete("/deleteUser/:userId", deleteUser);

//LOGIN
routes.post("/login", loginUser);

export default routes;
