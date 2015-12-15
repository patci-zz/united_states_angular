module.exports = exports = function(app) {
  require('./controllers/states_controller')(app); // Webpack does not support __dirname
  require('./directives/state_directive')(app);
  require('./directives/state_transclude_directive')(app);
  require('./directives/state_form_directive')(app);
  require('./controllers/all_states_controller')(app);
};
