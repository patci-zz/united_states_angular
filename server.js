var express = require('express');
var app = express();
var mongoose = require('mongoose');
var statesRouter = require(__dirname + '/routes/states_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/state_dev');

app.use(express.static(__dirname + '/build'));

app.use('/api', statesRouter);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server up on port: ' + port);
});
