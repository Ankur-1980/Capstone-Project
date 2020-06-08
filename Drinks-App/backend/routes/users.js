const users = require("express").Router();
const database = require("../connection");

users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((result) => {
    res.json(result.rows);
  });
});

module.exports = users;
