var express = require("express");
var router = express.Router();
var dbUtils = require("../db/db_utils");

/* GET users listing. */
router.get("/lipsticks", function(req, res, next) {
  console.log("get lispticks...");
  dbUtils.connectDb(
    db => {
      const collection = db.collection("lipsticks");
      collection.find({}).toArray((err, result) => {
        console.log(result);
        res.send(result);
      });
    },
    err => {
      console.log(err);
      res.send({
        err: "err"
      });
    }
  );
});

module.exports = router;
