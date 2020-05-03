const mongoose = require('mongoose');
const Cache = mongoose.model("Cache");

const getAllKeys = async function () {
    Cache.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
    });
};

const getKeyById = async function (key) {
    Cache.findOne(key, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
};

const addKey = async function (obj) {
    Cache.insertOne(obj, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
};

const deleteKeyById = async function (key) {
    Cache.deleteOne({key: key}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
};

const deleteAllKeys = async function () {
    Cache.deleteMany({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
};

module.exports = {
    getAllKeys,
    getKeyById,
    addKey,
    deleteKeyById,
    deleteAllKeys
 };