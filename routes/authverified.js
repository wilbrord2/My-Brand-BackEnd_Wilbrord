const routes = require("express").Router();
const verify = require("./verifyToken");

routes.get("/post", verify, (req, res) => {
  res.json({
    posts: { title: "ur are using token", Description: "token verified" },
  });
});

module.exports = routes;
