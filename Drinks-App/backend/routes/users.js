const users = require("express").Router();
const pool = require("../connection");

users.get("/", (req, res) => {
  pool.query("SELECT * FROM users").then((result) => {
    res.json(result.rows);
  });
});

module.exports = users;
