require(__dirname + '/../../app/js/entry'); //entry establishes
require('angular-mocks');

// note: jasmine is like an all-in-one mocha-chai for frontend

describe('states controller', function() {
  var $httpBackend;
  var $ControllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('UnitedStatesApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able able to create a controller', function() {
    var controller = $ControllerConstructor('StatesController', {$scope: $scope});
    expect(typeof $scope).toBe('object');
    expect(typeof controller).toBe('object');
    expect(Array.isArray($scope.states)).toBe(true);
  });
});
