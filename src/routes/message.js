import express from "express";
import {
  GetAllMessage,
  SaveMessage,
  SearchMessage,
  deleteMessage,
} from "../contollers/messageControler";

const routes = express.Router();

// Display all Message from database
routes.get("/show", GetAllMessage);

// // Sending Message to database
routes.post("/save", SaveMessage);

// SEARCH FOR A SPECIFIC Message

routes.get("/getOne/:messageId", SearchMessage);

// delete a specific Message
routes.delete("/deleteOne/:messageId", deleteMessage);

export default routes;
