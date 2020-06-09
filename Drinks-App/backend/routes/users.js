const users = require("express").Router();
const database = require("../connection");

users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((response) => {
    res.status(200).json({ message: "Users Fetched", users: response.rows });
  });
});

users.post("/", (req, res) => {
  // console.log(req.body);

  database
    .query(
      "INSERT INTO users (user_id, first_name, last_name, username, email, password, age, bio) VALUES (uuid_generate_v4(), $1::text, $2::text,$3::text, $5::text, $6::text, $4::int, $7::text)",
      [
        req.body.firstName,
        req.body.lastName,
        req.body.userName,
        req.body.age,
        req.body.email,
        req.body.password,
        req.body.bio,
      ]
    )
    .then(() => {
      database.query("SELECT * FROM users").then((response) => {
        res.status(201).json({ message: "User Added", users: response.rows });
      });
    });
});

module.exports = users;
