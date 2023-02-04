//"use strict";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentations from "./helpers/documentation";
const PORT = process.env.PORT || 3000;
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
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to DB");
  });
});

export default app;
