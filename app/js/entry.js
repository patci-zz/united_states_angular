require('angular/angular');
var angular = window.angular;


var unitedStatesApp = angular.module('UnitedStatesApp', []); //angular construct
require('./states/controllers/states_controller')(unitedStatesApp);
require('./states/states')(unitedStatesApp);


unitedStatesApp.controller('GreetingConroller', ['$scope', function($scope) {
  $scope.greeting = 'Hello, United States!';

  $scope.alertGreeting = function() {
    alert($scope.greeting);
  };
}]);

