const jwt = require("jsonwebtoken");
const database = require("../services/connection");

exports.onlyAuthUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decodedToken = parseToken(token);
    if (!decodedToken) {
      return notAuthorized(res);
    }
    database
      .query("SELECT * FROM users WHERE user_id = $1", [decodedToken.sub])
      .then((response) => {
        const user = response.rows[0];
        if (response.rows <= 0) {
          return notAuthorized(res);
        }

        if (user) {
        }
      });
    User.findById(decodedToken.sub, (error, foundUser) => {
      if (error) {
        return res.mongoError(error);
      }

      if (foundUser) {
        res.locals.user = foundUser;
        next();
      } else {
        return notAuthorized(res);
      }
    });
  } else {
    return notAuthorized(res);
  }
};

function parseToken(token) {
  try {
    return jwt.verify(token.split(" ")[1], "secretKey");
  } catch (error) {
    return null;
  }
}

function notAuthorized(res) {
  return res.status(401).send({
    errors: [
      {
        message: "You need to log in to get an access!",
      },
    ],
  });
}
