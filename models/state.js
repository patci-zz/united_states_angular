var mongoose = require('mongoose');

var stateSchema = new mongoose.Schema({
  name: {
    type: String
  },
  city: {
    type: String
    },
  userId: {
    type: String
  }
});

module.exports = mongoose.model('State', stateSchema);
