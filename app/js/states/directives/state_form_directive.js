module.exports = exports = function(app) {
  app.directive('stateFormDirective', function() {
  return {
    restrict: 'AC',
    replace: true,
    templateUrl: 'templates/state_form_template.html',
    transclude: true,
    scope: {
      buttonText: '@',
      headingText: '@', //Whatever state it is
      formName: '@',
      state: '=',
      save: '&' //Usually used to pass a function with function call context
    }
  }
 });
}
