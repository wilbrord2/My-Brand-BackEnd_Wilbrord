import express from "express";
import messageRouts from "./message";
import userRout from "./user";
import articleRoutes from "./blog";
const routes = express.Router();

//import userverifiedToken from "./authverified";
//routes.use("/testToken", userverifiedToken);

routes.use("/user", userRout);
routes.use("/messages", messageRouts);
routes.use("/article", articleRoutes);

routes.get("/", (req, res) => {
  res.send(" home-Page");
});
export default routes;
