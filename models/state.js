var mongoose = require('mongoose');

var stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  favoriteCity: {
    type: String,
    required: true
    }
});

module.exports = mongoose.model('State', stateSchema);
