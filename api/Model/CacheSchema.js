var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cacheSchema = new Schema({
  key: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  ttl: {
    type: Number
  }
}, { collection: 'cacheDb' });

module.exports = mongoose.model('Cache', cacheSchema);