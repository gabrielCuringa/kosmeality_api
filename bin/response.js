module.exports.success = (res, json) => {
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Content-Range", "0-9/" + json.length);
  res.status(200);
  res.send({ data: json });
};

module.exports.unauthorized = (res, err) => {
  res.status(401);
  res.send({
    message: "Unauthorized."
  });
};

module.exports.notFound = (res, err) => {
  res.status(404);
  res.send({
    message: err.message
  });
};

module.exports.internalError = (res, err) => {
  res.status(500).send({ message: "Failed to authenticate token." });
};
