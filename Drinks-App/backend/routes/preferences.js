const preferences = require("express").Router();
const database = require("../connection");

preferences.get("/", (req, res) => {
  database.query("SELECT * FROM preferences").then((result) => {
    res.status(200).json({ message: "Fetched Items", items: result.rows });
  });
});

preferences.post("/", (req, res) => {
  console.log(req.body);

  // database
  //   .query("INSERT INTO home_bar (home_bar_info) VALUES($1::text)", [
  //     req.body.textInput,
  //   ])
  //   .then(() => {
  //     database.query("SELECT * FROM preferences").then((response) => {
  //       res.status(201).json({ message: "Item Added", items: response.rows });
  //     });
  //   });
});

module.exports = preferences;
