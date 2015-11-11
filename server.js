var mongoose = require('mongoose');
var express = require('express');
var app = express();
var beersRouter = require(__dirname + '/routes/beers_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beer_dev');

app.use('/api', beersRouter);

app.get('/yaybeer', function(req, res) {
  res.send('Where\'s the keg at???');
})

app.listen(process.env.port || 3000, function() {
  console.log('server up');
});
