const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const config = require("../config");

// Connection URL
const url =
  process.env.NODE_ENV === "production"
    ? config.releaseConfig.baseMongoUrl
    : config.releaseConfig.baseMongoUrl;

// Database Name
const dbName =
  process.env.NODE_ENV === "production"
    ? config.releaseConfig.baseMongoDbName
    : config.releaseConfig.baseMongoDbName;

// Use connect method to connect to the server
const connectDb = (onSuccess, onError) => {
  console.log("Connecting to... " + url);
  console.log("on database... " + dbName);
  MongoClient.connect(url, (err, client) => {
    if (!err) {
      console.log("Connected successfully to server");
      onSuccess(client.db(dbName));
      client.close();
    } else {
      onError(err);
    }
  });
};

module.exports.findAll = (collectionName, onSuccess, onError, query = {}) => {
  connectDb(
    db => {
      db.collection(collectionName)
        .find(query)
        .toArray((err, result) => {
          console.log(result);
          onSuccess(result);
        });
    },
    err => {
      onError(err);
    }
  );
};

module.exports.findOne = (collectionName, query = {}, onSuccess, onError) => {
  connectDb(
    db => {
      db.collection(collectionName).findOne(query, (err, result) => {
        console.log(result);
        onSuccess(result);
      });
    },
    err => {
      onError(err);
    }
  );
};

module.exports.insertOne = (collectionName, obj, onSuccess, onError) => {
  connectDb(
    db => {
      db.collection(collectionName).insertOne(obj, (err, result) => {
        if (err) onError(err);
        onSuccess(result);
      });
    },
    err => {
      onError(err);
    }
  );
};

module.exports.stringToObjectId = id => {
  return ObjectID(id);
};
