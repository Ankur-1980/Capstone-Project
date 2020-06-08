const recipes = require("express").Router();
const pool = require("../connection");

recipes.get("/", (req, res) => {
  pool.query("SELECT * FROM users").then((result) => {
    res.json(result.rows);
  });
});

module.exports = recipes;
