var express = require('express');
var bodyParser = require('body-parser');
var State = require(__dirname + '/../models/state');
var handleError = require(__dirname + '/../lib/handleServerError');
var eatAuth = require(__dirname + '/../lib/eat_auth');

var statesRouter = module.exports = exports = express.Router();

//statesRouter.use(bodyPar)
statesRouter.get('/states', function(req, res) {
  State.find({drinkerID: req.user._id}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

statesRouter.get('/allstates', function(req, res) {
  State.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

statesRouter.post('/states', bodyParser.json(), eatAuth, function(req, res) {
  var newState = new State(req.body);
  newState.ID = req.user._id;
  newState.author = req.user.username;
  newState.save(function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);
  });
});

statesRouter.put('/states/:id', bodyParser.json(), eatAuth, function(req, res)  {
  var stateData = req.body;
  delete beerData._id;
  State.update({_id: req.params.id}, stateData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});

statesRouter.delete('/states/:id', bodyParser.json(), eatAuth, function(req, res) {
  State.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});
