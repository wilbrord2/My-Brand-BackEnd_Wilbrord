//"use strict";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentations from "./helpers/documentation";
const app = express();
dotenv.config();
// ROUTES
import messageRouts from "./routes/message";
import userRout from "./routes/user";
import userverifiedToken from "./routes/authverified";
import articleRoutes from "./routes/blog";
// Middlewares
// bodyParser
app.use(bodyParser.json());
app.use("/api/messages", messageRouts);
app.use("/api/user", userRout);
app.use("/api/access", userverifiedToken);
app.use("/api/article", articleRoutes);
app.use("/documentation", swaggerDoc.serve);
app.use("/documentation", swaggerDoc.setup(swaggerDocumentations));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send(" home-Page");
});

//CONNECT TO db
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

// Listen to the server

app.listen(3000);

export default app;
