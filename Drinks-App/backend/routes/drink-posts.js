const drinkPosts = require("express").Router();
const database = require("../services/connection");

drinkPosts.get("/", (req, res) => {
  database
    .query("SELECT * FROM drink_posts")
    .then((response) => res.status(200).json(response.rows));
});

drinkPosts.post("/", (req, res) => {
  console.log("working?");

  console.log("req.body", req.body);
});

drinkPosts.post("/images", (req, res) => {
  console.log("Images?");
  console.log("req.body", req.body);
  console.log("req.header", req.headers);
  console.log("req.file", req.file);
  console.log("req.files", req.files);

  // console.log(req.body);
});

module.exports = drinkPosts;
