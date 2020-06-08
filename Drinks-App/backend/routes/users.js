const users = require("express").Router();
const database = require("../connection");

users.get("/", (req, res) => {
  database.query("SELECT * FROM users").then((result) => {
    res.json(result.rows);
  });
});

users.post("/", (req, res) => {
  database.query(
    "INSERT INTO users (user_id, first_name, last_name, username, email password) VALUES (uuid_generate_v4(), $2::text, $3::text,$4::text, $5::text)"
  );
});

module.exports = users;
