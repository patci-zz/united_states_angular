var express = require('express');
var bodyParser = require('body-parser');
var Beer = require(__dirname + '/../models/beer');
var handleError = require(__dirname + '/../lib/handleServerError');
var eatAuth = require(__dirname + '/../lib/eat_auth');

var beersRouter = module.exports = exports = express.Router();

//beersRouter.use(bodyPar)
beersRouter.get('/beers', function(req, res) {
  Beer.find({drinkerID: req.user._id}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

beersRouter.get('/allbeers', function(req, res) {
  Beer.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

beersRouter.post('/beers', bodyParser.json(), eatAuth, function(req, res) {
  var newBeer = new Beer(req.body);
  newBeer.drinkerID = req.user._id;
  newBeer.drinker = req.user.username;
  newBeer.author = req.user.username;
  newBeer.save(function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);
  });
});

beersRouter.put('/beers/:id', bodyParser.json(), eatAuth, function(req, res)  {
  var beerData = req.body;
  delete beerData._id;
  Beer.update({_id: req.params.id}, beerData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});

beersRouter.delete('/beers/:id', bodyParser.json(), eatAuth, function(req, res) {
  Beer.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});
