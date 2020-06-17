const users = require("express").Router();
const database = require("../connection");
const bcrypt = require("bcrypt");
const { response } = require("express");

// const passport = require("passport");
// const initializePassport = require("../passportConfig");

// initializePassport(passport);

// get all users
users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((response) => {
    res.status(200).json({ message: "Users Fetched", users: response.rows });
  });
});

// users.get("/:id"), (req, res) => {};

// path for register
users.post("/register", async (req, res) => {
  // console.log("server", req.body);
  let {
    firstName,
    lastName,
    userName,
    age,
    email,
    password,
    bio,
    date,
  } = req.body;

  let hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);

  database.query(
    "SELECT * FROM users WHERE email = $1",
    [email],
    (response) => {
      if (response.rows.length > 0) {
        res.status(200).json({ message: "email already exists" });
        // res.redirect("/");
      } else {
        database.query(
          `INSERT INTO users (user_id, first_name, last_name, username, email, password, bio, birthday, join_date) VALUES (uuid_generate_v4(), $1::text, $2::text,$3::text, $5::text, $6::text, $7::text, $4::text, $8::date) RETURNING user_id, password`,
          [
            firstName,
            lastName,
            userName,
            age,
            email,
            hashedPassword,
            bio,
            date,
          ],
          (error, response) => {
            console.log(response.rows);
            if (err) {
              console.log(error);
            } else {
              res.status(200).json({
                message: "You successfully registered, please log in",
              });
            }
          }
        );
      }
    }
  );
});

// // login in
// users.post("/login", (req, res) => {
//   const { userName, password } = req.body;
//   database.query(
//     "SELECT * FROM users WHERE userName = $1",
//     [userName],
//     (response) => {
//       if (response.rows.length > 0) {
//         res.status(200).json({ message: "email already exists" });
//         // res.redirect("/");
//       }
//     })

users.post("/login", (req, res) => {
  const { userName, password } = req.body;
  database.query(
    "SELECT * FROM users WHERE userName = $1",
    [userName],
    (response) => {
      if (response.rows.length > 0) {
        res.status(200).json({ message: "userName found" });
      }
    }
  );
});

module.exports = users;
