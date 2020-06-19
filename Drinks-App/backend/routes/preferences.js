const preferences = require("express").Router();
const database = require("../services/connection");

preferences.get("/", (req, res) => {
  database.query("SELECT * FROM preferences").then((result) => {
    res.status(200).json({ message: "Fetched Items", items: result.rows });
  });
});

// preferences.get("/home-bar", (req, res) => {
//   database
//     .query("SELECT * FROM preferences WHERE preference_cat = 'home_bar'")
//     .then((result) => {
//       res.status(200).json({ message: "Fetched Items", items: result.rows });
//     });
// });

// preferences.get("/locations", (req, res) => {
//   database
//     .query("SELECT * FROM preferences WHERE preference_cat = 'places'")
//     .then((result) => {
//       res.status(200).json({ message: "Fetched Items", items: result.rows });
//     });
// });

// preferences.get("/bartenders", (req, res) => {
//   database
//     .query("SELECT * FROM preferences WHERE preference_cat = 'bartenders'")
//     .then((result) => {
//       res.status(200).json({ message: "Fetched Items", items: result.rows });
//     });
// });

preferences.post("/", (req, res) => {
  // console.log(req.body);
  database
    .query(
      "INSERT INTO preferences (preference_info, preference_cat) VALUES($1::text, $2::text)",
      [req.body.info, req.body.category]
    )
    .then(() => {
      database.query("SELECT * FROM preferences").then((response) => {
        res.status(201).json({ message: "Item Added", items: response.rows });
      });
    });
});

preferences.delete("/:id", (req, res) => {
  database
    .query(`DELETE FROM preferences WHERE preference_id=$1::INT`, [
      req.params.id,
    ])
    .then(() => {
      database.query("SELECT * FROM preferences").then((response) => {
        res.status(200).json({ message: "Item Deleted", items: response.rows });
      });
    });
});

module.exports = preferences;
