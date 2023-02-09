import express from "express";
import { addcommentandlike,getAllCommentandlike } from "../contollers/commentController";

const routes = express.Router();

routes.post("/savecomment", addcommentandlike);
routes.get("/getcomment", getAllCommentandlike)

export default routes;
