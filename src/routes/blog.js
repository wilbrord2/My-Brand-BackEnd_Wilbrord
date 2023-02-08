import express from "express";
import {
  createArticle,
  displayAllArticle,
  getSingleArticle,
  deleteArticle,
  UpdateArticle,
} from "../contollers/blogController";
import { permission, adminPermissions } from "./permission";
const routes = express.Router();

// create Blog to database
routes.post("/createArticle", permission, createArticle);

// Display all Blogs from database
routes.get("/getAllArticle", permission, displayAllArticle);
// SEARCH FOR A SPECIFIC BLOG

routes.get("/getSingleArticle/:blogId", permission, getSingleArticle);

// delete a specific post
routes.delete("/deleteArticle/:blogId", adminPermissions, deleteArticle);

// UPPDATE A POST

routes.patch("/UpdateArticle/:blogId", permission, UpdateArticle);
export default routes;
