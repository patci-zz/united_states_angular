require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var angular = window.angular;

var unitedStatesApp = angular.module('UnitedStatesApp', ['ngRoute', 'ngCookies']); //angular construct
require('./states/states')(unitedStatesApp);
require('./services/services')(unitedStatesApp);
require('./states/controllers/states_controller')(unitedStatesApp);
require('./directives/directives')(unitedStatesApp);
require('./filters/filters')(unitedStatesApp);

unitedStatesApp.config(['$routeProvider', function($route) {
  $route
    .when('/states', {
      templateUrl: '/templates/states_view.html',
      controller: 'StatesController'
    })
    .when('/signup', {
      templateUrl: '/templates/auth_view.html',
      controller: 'SignupController'
    })
    .when('/signin', {
      templateUrl: '/templates/auth_view.html',
      controller: 'SigninController'
    })
    .when('/allstates', {
      templateUrl: '/templates/all_states.html',
      controller: 'AllStatesController'
    })
    .otherwise({
      redirectTo: '/signup'
    })
}]);
