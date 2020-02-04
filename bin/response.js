module.exports.success = (res, json) => {
  res.status(200);
  res.send({ data: json });
};

module.exports.notFound = (res, err) => {
  res.status(404);
  res.send({
    message: err.message
  });
};
