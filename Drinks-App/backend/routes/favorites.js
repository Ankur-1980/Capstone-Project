const favorites = require("express").Router();
const database = require("../connection");

favorites.get("/", (req, res) => {
  database.query("SELECT * FROM favorites").then((result) => {
    res.status(200).json({ message: "Fetched Items", items: result.rows });
  });
});

favorites.post("/", (req, res) => {
  database
    .query("INSERT INTO favorites (drink_id) VALUES($1::bigint)", [
      req.body.idDrink,
    ])
    .then(() => {
      database.query("SELECT * FROM favorites").then((response) => {
        // console.log(response.rows);

        res.status(201).json({ message: "Item Added", items: response.rows });
      });
    });
});

module.exports = favorites;
