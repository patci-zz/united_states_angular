module.exports = exports = function(app) {
  app.directive('dummyDirective', function() { //naming is important (HTML will tranlsate into dummy-directive)
    return {
      restrict: 'AC', //A-attribute, C-class alts M-comment, E-element //this field is REQUIRED (determines what can be included into the DOM)
      template: '<h1>Dummy Directive: {{greeting}}</h1><input type="text" data-ng-model="greeting">',
      scope:{  //gives each one its own scope
        greeting: '@'
      }
    }
  });
};
