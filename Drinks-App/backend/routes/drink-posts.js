const drinkPosts = require("express").Router();
const database = require("../services/connection");
const upload = require("../services/image-upload");

const singleUpload = upload.single("image");

drinkPosts.get("/", (req, res) => {
  database
    .query("SELECT * FROM drink_posts")
    .then((response) => res.status(200).json(response.rows));
});

drinkPosts.post("/", (req, res) => {
  console.log("working?");

  console.log("req.body", req.body);
});

drinkPosts.post("/images", (req, res) => {
  singleUpload(req, res, (err) => {
    if (err) {
      return res.status(422).json({ message: err.message });
    }

    return res.json({ imgURL: req.file.location, imgKey: req.file.key });
  });
});

module.exports = drinkPosts;
