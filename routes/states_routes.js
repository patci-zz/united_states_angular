var express = require('express');
var bodyParser = require('body-parser');
var State = require(__dirname + '/../models/state');
var handleError = require(__dirname + '/../lib/handleServerError');

var statesRouter = module.exports = exports = express.Router();

statesRouter.get('/states', function(req, res) {
  State.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

statesRouter.post('/states', bodyParser.json(), eatAuth, function(req, res) {
  var newState = new State(req.body);
  newState.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

statesRouter.put('/states/:id', bodyParser.json(), eatAuth, function(req, res)  {
  var stateData = req.body;
  delete stateData._id;
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
