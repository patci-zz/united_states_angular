module.exports = exports = function(app) {
  require('./controllers/states_controller')(app); // Webpack does not support __dirname
};
