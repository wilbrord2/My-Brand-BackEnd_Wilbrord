import express from "express";
import messageRouts from "./message";
import userRout from "./user";
import userverifiedToken from "./authverified";
import articleRoutes from "./blog";
const routes = express.Router();

routes.use("/messages", messageRouts);
routes.use("/user", userRout);
routes.use("/access", userverifiedToken);
routes.use("/article", articleRoutes);

routes.get("/", (req, res) => {
  res.send(" home-Page");
});
export default routes;
