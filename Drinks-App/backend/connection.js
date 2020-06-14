require("dotenv").config();

const { Pool } = require("pg");

// check to see if app is in production
const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgressql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:$${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const credentials = new Pool({
//   user: "postgres",
//   password: "password",
//   host: "localhost",
//   port: 5432,
//   database: "Capstone",
//   ssl: false,
// });

const credentials = new Pool({
  connectionString: isProduction ? process.env.URL : connectionString,
});
module.exports = { credentials };
