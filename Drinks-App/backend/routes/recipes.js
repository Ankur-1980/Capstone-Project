const recipes = require("express").Router();
const database = require("../connection");

recipes.get("/", (req, res) => {
  database.query("SELECT * FROM user_recipes").then((result) => {
    res.json(result.rows);
  });
});

recipes.post("/", (req, res) => {
  console.log(req.body);

  // Function for time stamp postgres
  // NOW()

  // database
  //   .query()
  //   .then(() => {
  //     database.query("SELECT * FROM recipes").then((response) => {
  //       res.status(201).json({ message: "User Added", recipes: response.rows });
  //     });
  //   });
});

module.exports = recipes;
