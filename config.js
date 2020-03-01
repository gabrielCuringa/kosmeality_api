// config.js
module.exports = {
  devConfig: {
    baseMongoUrl: "mongodb://localhost:27017",
    baseMongoDbName: "local",
    baseApiUrl: "http://localhost:3000"
  },
  releaseConfig: {
    baseMongoUrl:
      "mongodb+srv://gcuringa:gcuringa@cluster0-t22mk.mongodb.net/test?w=majority",
    baseMongoDbName: "kosmeality_db",
    baseApiUrl: "https://kosmeality-api.herokuapp.com/"
  },
  secret: "kosmeality_eid_aubriet_curinga_m2intense",
  expiresIn: "1h"
};
