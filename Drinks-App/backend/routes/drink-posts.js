const drinkPosts = require("express").Router();
const database = require("../connection");

drinkPosts.get("/", (req, res) => {
  database
    .query("SELECT * FROM drink_posts")
    .then((response) => res.status(200).json(response.rows));
});

module.exports = drinkPosts;
