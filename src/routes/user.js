import express from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  loginUser,
} from "../contollers/userController";
import { adminPermissions } from "./permission";
const routes = express.Router();

// check we are on page
routes.get("/register", async (req, res) => {
  res.send("we are on register page");
});

// SIGN-UP
routes.post("/createUser", createUser);
routes.get("/getAllUsers",adminPermissions, getAllUsers);
routes.get("/getSingleUser/:userId", adminPermissions, getSingleUser);
routes.delete("/deleteUser/:userId", adminPermissions, deleteUser);

//LOGIN
routes.post("/login", loginUser);

export default routes;
