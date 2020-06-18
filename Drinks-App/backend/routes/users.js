const users = require("express").Router();
const database = require("../connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// get all users
users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((response) => {
    res.status(200).json({ message: "Users Fetched", users: response.rows });
  });
});

// path for register
users.get("/register"), (req, res) => {};

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

  // const dbErrors = [];

  let hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);

  database.query(
    "SELECT * FROM users WHERE email = $1",
    [email],
    (err, response) => {
      if (err) {
        throw err;
      }
      console.log(response.rows);

      if (response.rows.length > 0) {
        res
          .status(200)
          .json({ message: "email already exists", goodToGo: false });
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
          (err, response) => {
            if (err) {
              throw err;
            }
            let user = response.rows[0];
            let payload = { subject: user.user_id };
            let token = jwt.sign(payload, "secretKey");
            console.log(response.rows);
            res.status(200).send({ token });
            res.status(201).json({
              message: "You successfully registered, please log in",
              goodToGo: true,
            });
          }
        );
      }
    }
  );
});

// login in
users.post("/login", (req, res) => {
  console.log("login", req.body);
  const { userName, password } = req.body;

  database
    .query("SELECT * FROM users WHERE userName = $1", [userName])
    .then((response) => {
      console.log("rows", response.rows);
      if (response.rows.length > 0) {
        // JWT GOES HERE
        res.status(200).json({
          message: "userName found",
          goodToGo: true,
          user: response.rows[0],
        });
      } else {
        res.status(404).json({
          message: "user not found",
          goodToGo: false,
          user: response.rows[0],
        });
      }
    });
});

module.exports = users;
