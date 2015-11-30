var mongoose = require('mongoose');

var stateSchema = new mongoose.Schema({
  stateName: {
    type: String,
    required: true
  },
  stateCapital: {
    type: String,
    required: true
    }
});

module.exports = mongoose.model('State', stateSchema);
