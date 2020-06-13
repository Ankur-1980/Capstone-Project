const users = require("express").Router();
const database = require("../connection");
const bcrypt = require("bcrypt");

users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((response) => {
    res.status(200).json({ message: "Users Fetched", users: response.rows });
  });
});

users.post("/", async (req, res) => {
  // securing password
  // let hashedPassword = await bcrypt.hash(req.body.password, 10);
  // const errors = [];
  // database.query(
  //   "SELECT * FROM users WHERE email = $1",
  //   req.body.email,
  //   (err, results) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(results.rows);
  //   }
  // );
  database
    .query(
      "INSERT INTO users (user_id, first_name, last_name, username, email, password, bio, birthday, join_date) VALUES (uuid_generate_v4(), $1::text, $2::text,$3::text, $5::text, $6::text, $7::text, $4::date, $8::date)",
      [
        req.body.firstName,
        req.body.lastName,
        req.body.userName,
        req.body.age,
        req.body.email,
        req.body.password,
        req.body.bio,
        req.body.date,
      ]
    )
    .then(() => {
      database.query("SELECT * FROM users").then((response) => {
        res.status(201).json({ message: "User Added", users: response.rows });
      });
    });
});

module.exports = users;
