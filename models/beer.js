var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
    },
  style: String,
  abv: Number
});

module.exports = mongoose.model('Beer', beerSchema);
