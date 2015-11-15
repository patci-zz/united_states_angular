var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beer_dev');
process.env.APP_SECRET = process.env.APP_SECRET || 'changeme';

var beersRouter = require(__dirname + '/routes/beers_routes');
var usersRouter = require(__dirname + '/routes/users_routes');
app.use('/api', beersRouter);
app.use('/api', usersRouter);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server up on port: ' + port);
});

app.get('/yaybeer', function(req, res) {
  res.send('Where\'s the keg at???');
})
