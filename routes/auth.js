const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const response = require("../bin/response");
const dbUtils = require("../utils/db_utils");
const authUtils = require("../utils/auth_utils");
const config = require("../config");

/**
 *
 * @api {post} /auth Authentification
 * @apiGroup Auth
 * @apiVersion  0.1.0
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
   {
    "data": 
        {
          "token"
        }     
  }
*/
router.post("/", function(req, res, next) {
  console.log("auth...");
  const { body } = req;
  const { user } = body;
  const { pwd } = body;
  dbUtils.findOne(
    "users",
    { user: user },
    userDb => {
      authUtils.compare(pwd, userDb.pwd, isValid => {
        console.log(isValid);
        if (isValid) {
          //if user log in success, generate a JWT token for the user with a secret key
          jwt.sign(
            { user },
            config.secret,
            { expiresIn: config.expiresIn },
            (err, token) => {
              if (!err) {
                response.success(res, token);
              }
              console.log(err);
              response.unauthorized(res);
            }
          );
        } else {
          response.unauthorized(res);
        }
      });
    },
    err => {
      response.unauthorized(res);
    }
  );
});

module.exports = router;
