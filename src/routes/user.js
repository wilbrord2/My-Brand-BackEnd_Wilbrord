import express from "express";
import { createUser, loginUser } from "../contollers/userController";
const routes = express.Router();

// check we are on page
routes.get("/register", async (req, res) => {
  res.send("we are on register page");
});

// SIGN-UP

routes.post("/register", createUser);

//LOGIN
routes.post("/login", loginUser);

export default routes;
