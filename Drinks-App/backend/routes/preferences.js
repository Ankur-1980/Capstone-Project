const preferences = require("express").Router();
const database = require("../connection");
const { response } = require("express");

preferences.get("/home-bar", (req, res) => {
  database.query("SELECT * FROM home_bar").then((result) => {
    res.status(200).json(result.rows);
  });
});

preferences.post("/home-bar", (req, res) => {
  database
    .query("INSERT INTO home_bar (home_bar_info) VALUES($1::text)", [
      req.body.textInput,
    ])
    .then(() => {
      database.query("SELECT * FROM home_bar").then((response) => {
        res.status(201).json({ message: "Item Added", items: response.rows });
      });
    });
});

module.exports = preferences;
