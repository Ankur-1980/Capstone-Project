const recipes = require("express").Router();

recipes.get("/", (req, res) => {
  res.json("working?");
});

module.exports = recipes;
