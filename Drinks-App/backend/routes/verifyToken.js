const verifyToken = (req, res, next) => {
  console.log(req.header.authorization);

  if (!req.header.authorization) {
    return res.status(401).send("unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];

  if (token === "null") {
    return res.status(401).send("unauthorized request");
  }

  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("unauthorized request");
  }
  req.userId = payload.subject;
  next();
};

module.exports = verifyToken;
