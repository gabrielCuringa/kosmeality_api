var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var checkBeforeProtectedRoutes = require("./utils/auth_utils")
  .checkBeforeProtectedRoutes;

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var lipsticksRouter = require("./routes/lipsticks");
var usersRouter = require("./routes/users");
var cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use(checkBeforeProtectedRoutes);
app.use("/users", usersRouter);

/**
 *
 * @api {get} /lipsticks Get lipsticks list
 * @apiGroup Products
 * @apiVersion  0.1.0
 */
app.use("/lipsticks", lipsticksRouter);

module.exports = app;
