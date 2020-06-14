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

  // Stores user details inside session. serializeUser determines which data of the user
  // object should be stored in the session. The result of the serializeUser method is attached
  // to the session as req.session.passport.user = {}. Here for instance, it would be (as we provide
  //   the user id as the key) req.session.passport.user = {id: 'xyz'}
  passport.serializeUser((user, done) => done(null, user.id));

  // In deserializeUser that key is matched with the in memory array / database or any data resource.
  // The fetched object is attached to the request object as req.user

  passport.deserializeUser((id, done) => {
    pool.query(`SELECT * FROM users WHERE id = $1`, [id], (err, response) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${response.rows[0].user_id}`);
      return done(null, response.rows[0]);
    });
  });
};

module.exports = initialize;
