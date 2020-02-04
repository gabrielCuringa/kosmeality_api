var express = require("express");
var router = express.Router();
var dbUtils = require("../utils/db_utils");
var authUtils = require("../utils/auth_utils");

/* POST create user */
router.post("/", (req, res, next) => {
  const { body } = req;
  const { user } = body;
  const { pwd } = body;
  authUtils.hash(pwd, hash => {
    let userObj = { user: user, pwd: hash };
    dbUtils.insertOne(
      "users",
      userObj,
      result => {
        res.send({ message: "success", userId: result.ops[0]._id });
      },
      err => {
        res.send({ message: err });
      }
    );
  });
});

module.exports = router;
