const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient("mongodb://localhost:27017/myProjDb");

const connectDB = () => {
  return client.connect();
};

module.exports = {
  client,
  connectDB,
};
