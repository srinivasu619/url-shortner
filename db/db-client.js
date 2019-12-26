const MongoClient = require("mongodb").MongoClient;

const insertRecord = function(record, callback) {
  MongoClient.connect(process.env.DB_URI, function(err, client) {
    if (err) {
      throw err;
    } else {
      const db = client.db("backendprojects");
      db.collection(process.env.COLL_NM).insertOne(record, function(err, res) {
        if (err) {
          throw err;
        } else {
          callback(record);
        }
      });
    }
  });
};

const fecthRecord = async function(record, callback) {
  MongoClient.connect(process.env.DB_URI, function(err, client) {
    if (err) {
      throw err;
    } else {
      const db = client.db("backendprojects");
      db.collection(process.env.COLL_NM)
        .find(record)
        .toArray(function(err, res) {
          if (err) {
            throw err;
          } else {
            callback(res[0]);
          }
        });
    }
  });
};

module.exports = {
  insertRecord,
  fecthRecord
};
