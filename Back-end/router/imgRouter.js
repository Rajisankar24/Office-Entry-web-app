const express = require("express");
const route = express.Router();
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

route.post("/uploadImage", upload.single("uploadImage"), (req, res) => {
  //   console.log(req.file.path);
  res.json(req.file);
  //   res.send("Image upload successfully");
});

module.exports = route;
