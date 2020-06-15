const LocalStrategy = require("passport-local").Strategy;
const database = require("./connection");
const bcrypt = require("bcrypt");

const initialize = (passport) => {
  const authenticateUser = (email, password, done) => {
    database.query(
      `SELECT * FROM users WHERE email = $1`,
      [email],
      (err, response) => {
        if (err) {
          throw err;
        }
        console.log(response.rows);
        // there are users in the db
        if (response.rows.length > 0) {
          const user = response.rows[0];

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              throw err;
            }
            if (isMatch) {
              // first parameter is errors
              //   stores user for future use
              return done(null, user);
            } else {
              return done(null, false, { message: "Password is not correct" });
            }
          });
        } else {
          // if email not found
          return done(null, false, { message: "Email is not registered" });
        }
      }
    );
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => done(null, user.user_id));

  passport.deserializeUser((id, done) => {
    pool.query(
      `SELECT * FROM users WHERE user_id = $1`,
      [id],
      (err, response) => {
        if (err) {
          return done(err);
        }
        console.log(`ID is ${response.rows[0].user_id}`);
        return done(null, response.rows[0]);
      }
    );
  });
};

module.exports = initialize;
