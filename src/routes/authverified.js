import express from "express";
import verify from "./verifyToken";
const routes = express.Router();

routes.get("/post", verify, (req, res) => {
  res.json({
    posts: { title: "ur are using token", Description: "token verified" },
  });
});

export default routes;
