const users = require("express").Router();
const database = require("../connection");

users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((response) => {
    res.status(200).json({ message: "Users Fetched", users: response.rows });
  });
});

users.post("/", (req, res) => {
  console.log(req.body);

  database
    .query(
      "INSERT INTO users (user_id, first_name, last_name, username, email, password, bio, birthday) VALUES (uuid_generate_v4(), $1::text, $2::text,$3::text, $5::text, $6::text, $7::text, $4::date)",
      [
        req.body.firstName, //1
        req.body.lastName, //2
        req.body.userName, //3
        req.body.age, //4
        req.body.email, //5
        req.body.password, //6
        req.body.bio, //7
      ]
    )
    .then(() => {
      database.query("SELECT * FROM users").then((response) => {
        res.status(201).json({ message: "User Added", users: response.rows });
      });
    });
});

module.exports = users;
