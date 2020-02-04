const response = require("../bin/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports.checkBeforeProtectedRoutes = (req, res, next) => {
  // check header or url parameters or post parameters for token
  var token = req.headers["x-access-token"];

  console.log("check auth...");
  console.log(token);

  if (!token) {
    console.log("error token");
    response.unauthorized(res);
  }
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return response.unauthorized(res);
    console.log("TOKEN IS VALID");
    next();
  });
};

module.exports.compare = (pwd, hash, callback) => {
  bcrypt
    .compare(pwd, hash)
    .then(res => {
      //true if valid
      console.log("is valid ? " + res);
      callback(res);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.hash = (pwd, callback) => {
  const saltRound = 12;
  bcrypt
    .hash(pwd, saltRound)
    .then(hash => {
      //return hash
      callback(hash);
    })
    .catch(err => {
      console.log(err);
    });
};
