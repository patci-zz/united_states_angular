module.exports = exports = function(app) {
  app.directive('stateDirective', function () {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '/templates/state_directive_template.html',
      scope: {
        state: '='
      }
    }
  });
};
