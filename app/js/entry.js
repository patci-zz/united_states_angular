require('angular/angular');
var angular = window.angular;

var stateApp = angular.model('UnitedStates', []); //angular construct
stateApp.controller('GreetingConroller', ['$scope', function($scope) {
  $scope.greeting = 'Hello World, Resources, and Environment!';
}]);
