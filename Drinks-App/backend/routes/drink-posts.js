const drinkPosts = require("express").Router();
const database = require("../connection");
const multer = require("multer");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").joim("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + ext);
  },
});

drinkPosts.get("/", (req, res) => {
  database
    .query("SELECT * FROM drink_posts")
    .then((response) => res.status(200).json(response.rows));
});

drinkPosts.post(
  "/",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    console.log("server", req.body);
  }
);

module.exports = drinkPosts;
