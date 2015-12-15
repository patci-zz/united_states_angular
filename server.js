var express = require('express');
var app = express();
var mongoose = require('mongoose');
var statesRouter = require(__dirname + '/routes/states_routes');
var authRouter = require(__dirname + '/routes/auth_routes');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/state_dev');

process.env.APP_SECRET = process.env.APP_SECRET || 'changechangechangeme';

app.use(express.static(__dirname + '/build'));

app.use('/api', statesRouter);
app.use('/api', authRouter);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server up on port: ' + port);
});
