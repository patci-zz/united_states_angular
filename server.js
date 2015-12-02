var fs = require('fs');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/state_dev');
process.env.APP_SECRET = process.env.APP_SECRET || 'changeme';

/*
app.get('/:filename', function(req, res, next) {
  fs.stat(__dirname + '/build/' + req.params.filename, function(err, status) {
    if (err) {
      console.log(err);
      return next();
    }

    if(!stats.isFile()) return next();

    var file = fs.createReadStream(__dirname + '/build/' + req.params.filename);
    file.pipe(res);
  });
});

*/

var statesRouter = require(__dirname + '/routes/states_routes');
app.use(express.static(__dirname + '/build'));
app.use('/api', statesRouter);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server up on port: ' + port);
});

app.get('/favoriteState', function(req, res) {
  res.send('Somebody say Missouri???');
});
