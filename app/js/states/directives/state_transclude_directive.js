module.exports = exports = function(app) {
  app.directive('stateTransclude', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/state_transclude_directive.html',
      transclude: true,
      scope: {
        messageOne: '@'
      }
    }
  });
};
