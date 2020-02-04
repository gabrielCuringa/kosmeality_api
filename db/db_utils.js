const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "local";

// Use connect method to connect to the server
module.exports.connectDb = function(onSuccess, onError) {
  MongoClient.connect(url, function(err, client) {
    if (!err) {
      console.log("Connected successfully to server");
      onSuccess(client.db(dbName));
    } else {
      onError(err);
    }
    client.close();
  });
};
