const preferences = require("express").Router();
const database = require("../connection");

preferences.get("/home-bar", (req, res) => {
  database.query("SELECT * FROM home_bar").then((result) => {
    res.status(200).json(result.rows);
  });
});

module.exports = preferences;
