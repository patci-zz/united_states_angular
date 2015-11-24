require('angular/angular');
var angular = window.angular;

var bearApp = angular.model('bearstream', []); //angular construct
bearApp.controller('GreetingConroller', ['$scope', function($scope) {
  $scope.greeting = 'Hello World, Resources, and Ennvironment!';
}]);
