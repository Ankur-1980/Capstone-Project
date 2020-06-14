const users = require("express").Router();
const database = require("../connection");
const bcrypt = require("bcrypt");
const { response } = require("express");

// get all users
users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((response) => {
    res.status(200).json({ message: "Users Fetched", users: response.rows });
  });
});

// path for register
users.get("/register"), (req, res) => {};

users.post("/register", async (req, res) => {
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
        res.status(200).json({ message: "User Added", users: response.rows });
      });
    });
});

// login in
users.post("/login", async (req, res) => {
  const loginName = req.body.userName;
  const dbName = await database
    .query(`SELECT username FROM users where username='${loginName}'`)
    .then((response) => {
      res.json(response.rows);
    });
  // console.log(loginName);

  console.log(dbName);
});

module.exports = users;
