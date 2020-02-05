var express = require("express");
var router = express.Router();
var response = require("../bin/response");
var dbUtils = require("../utils/db_utils");

/**
 *
 * @api {get} /products/lipsticks Get all lipsticks
 * @apiGroup Products
 * @apiVersion  0.1.0
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
   {
    "data": [
        {
          "_id": "5e39644b6deed52c67995172",
          "color": "#D62352",
          "id": "49",
          "name": "撩骚"
        },
        {
          "_id": "5e39651eb3d44441f574f8a3",
          "color": "#DC4B41",
          "id": "14",
          "name": "一见倾心"
        },
        {...}
      ]
  }
 */
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
