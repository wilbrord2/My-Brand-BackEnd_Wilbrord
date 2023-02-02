import express from "express";
import {
  createArticle,
  displayAllArticle,
  getSingleArticle,
  deleteArticle,
  UpdateArticle,
} from "../contollers/blogController";
const routes = express.Router();

// Display all Blogs from database
routes.get("/getAllArticle", displayAllArticle);

// create Blog to database
routes.post("/createArticle", createArticle);

// SEARCH FOR A SPECIFIC BLOG

routes.get("/getSingleArticle/:blogId", getSingleArticle);

// delete a specific post
routes.delete("/deleteArticle/:blogId", deleteArticle);

// UPPDATE A POST

routes.patch("/UpdateArticle/:blogId", UpdateArticle);
export default routes;
