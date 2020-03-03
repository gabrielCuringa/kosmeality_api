var express = require("express");
var router = express.Router();

/**
 *
 * @api {post} /:brand Create user
 * @apiGroup Users
 * @apiVersion  0.1.0
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 */
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
