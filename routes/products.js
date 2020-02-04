var express = require("express");
var router = express.Router();
var response = require("../bin/response");
var dbUtils = require("../utils/db_utils");

/* GET users listing. */
router.get("/lipsticks", function(req, res, next) {
  console.log("get lispticks...");
  const collectionName = "lipsticks";
  dbUtils.findAll(
    collectionName,
    result => {
      response.success(res, result);
    },
    err => {
      response.notFound(res, err);
    }
  );
});

module.exports = router;
