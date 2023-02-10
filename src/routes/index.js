import express from "express";
import messageRouts from "./message";
import userRout from "./user";
import articleRoutes from "./blog";
import commentlike from "./comment";
import imageroute from "./saveimage";
const routes = express.Router();

routes.use("/user", userRout);
routes.use("/messages", messageRouts);
routes.use("/article", articleRoutes);
routes.use("/commentandlike", commentlike);
routes.use("/image", imageroute);
routes.get("/", (req, res) => {
  res.send(" home-Page");
});
export default routes;
