const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: "AINqO/3hxj/+FAOfX4ZOTUCZrRbvCp1R/8DSbrKQ",
  accessKeyId: "AKIAJCSJ4K7UCTMXS3DA",
  region: "us-east-2",
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "some-bucket",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
