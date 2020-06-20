const router = require("express").Router();

router.post("", (req, res) => {
  return res.json({ message: "Uploading File" });
});
