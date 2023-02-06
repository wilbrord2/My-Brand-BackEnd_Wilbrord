import express from "express";
import {
  GetAllMessage,
  SaveMessage,
  SearchMessage,
  deleteMessage,
} from "../contollers/messageControler";
import { adminPermissions } from "./permission";
const routes = express.Router();

// // Sending Message to database
routes.post("/save", SaveMessage);

// Display all Message from database
routes.get("/show", adminPermissions, GetAllMessage);

// SEARCH FOR A SPECIFIC Message
routes.get("/getOne/:messageId", adminPermissions, SearchMessage);

// delete a specific Message
routes.delete("/deleteOne/:messageId", adminPermissions, deleteMessage);

export default routes;
