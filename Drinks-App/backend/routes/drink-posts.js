const drinkPosts = require("express").Router();
const database = require("../services/connection");

const upload = require("../services/file-upload");

const singleUpload = upload.single("image");

drinkPosts.get("/", (req, res) => {
  database
    .query("SELECT * FROM drink_posts")
    .then((response) => res.status(200).json(response.rows));
});

drinkPosts.post("/", (req, res) => {
  // console.log("Drink Posts Post working?");
  singleUpload(req, res, (err) => {
    if (err) {
      return res.status(422).send({ message: err.message });
    }
    return res.json({ imageUrl: req.file.location });
  });
});

module.exports = drinkPosts;
