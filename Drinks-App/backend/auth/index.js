const auth = require("express").Router();

// route paths are prepended with /auth

auth.get("/", (req, res) => {
  res.json({ message: "working?" });
});

// Checks if sign up information is valid
// returns true/false
const validUser = (user) => {
  // checks to see if email is a string and not blank
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  //   checks to see if password is a string, not blank and more than 5 characters
  const validPassword =
    typeof user.password == "string" &&
    user.password.trim() != "" &&
    user.password.trim().length >= 6;

  return validEmail && validPassword;
};

auth.post("/signup", (req, res, next) => {
  if (validUser(req.body)) {
    res.json({ message: "signup post working?" });
  } else {
    // send error
  }
  next(new Error("Invalid user"));
});

module.exports = auth;
