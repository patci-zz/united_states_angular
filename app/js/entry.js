require('angular/angular');
var angular = window.angular;

var unitedStatesApp = angular.module('UnitedStatesApp', []); //angular construct
require('./states/states')(unitedStatesApp);
require('./services/services')(unitedStatesApp);

