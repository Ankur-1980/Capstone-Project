const recipes = require("express").Router();
const database = require("../connection");

recipes.get("/", (req, res) => {
  database.query("SELECT * FROM user_recipes").then((result) => {
    res.json(result.rows);
  });
});

recipes.post("/", (req, res) => {
  console.log(req.body);

  // database
  //   .query(
  //     "INSERT INTO recipes (user_id, first_name, last_name, username, email, password, bio, birthday) VALUES (uuid_generate_v4(), $1::text, $2::text,$3::text, $5::text, $6::text, $7::text, $4::date)",
  //     [
  //       req.body.firstName, //1
  //       req.body.lastName, //2
  //       req.body.userName, //3
  //       req.body.age, //4
  //       req.body.email, //5
  //       req.body.password, //6
  //       req.body.bio, //7
  //     ]
  //   )
  //   .then(() => {
  //     database.query("SELECT * FROM recipes").then((response) => {
  //       res.status(201).json({ message: "User Added", recipes: response.rows });
  //     });
  //   });
});

module.exports = recipes;
