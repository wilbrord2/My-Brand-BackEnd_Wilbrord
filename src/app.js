//"use strict";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentations from "./helpers/documentation";
import routes from "./routes";
const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
// Middlewares
// bodyParser
app.use(bodyParser.json());

var allowedOrigins = ['http://127.0.0.1:5500']
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  optionsSuccessStatus: 200
}))
app.use("/api", routes);
app.use("/documentation", swaggerDoc.serve);
app.use("/documentation", swaggerDoc.setup(swaggerDocumentations));

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
