require(__dirname + '/../../app/js/entry'); //entry establishes
require('angular-mocks');

// note: jasmine is like an all-in-one mocha-chai for frontend

describe('states controller', function() {
  var $httpBackend;
  var $ControllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('UnitedStatesApp')); // Pulls in app module

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

  describe('REST request functions', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_, $rootScope) {
      $httpBackend = _$httpBackend_; // Benefit of jshint
      $scope = $rootScope.$new();
      $ControllerConstructor('StatesController', {$scope: $scope});
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should add an array to states with a GET all', function() {
      $httpBackend.expectGET('/api/states').respond(200, [{_id: 1, name: 'test state'}]);
      $scope.getAll();
      $httpBackend.flush(); // Send the response from the line above;
      expect($scope.states[0].name).toBe('test state');
    });

    it('should be able to create a new state', function() {
      $httpBackend.expectPOST('/api/states', {name: 'test state', city: 'test city'})
        .respond(200, {name: 'a diff state'});
      expect($scope.states.length).toBe(0);
      expect($scope.newState).toEqual({});
      $scope.newState.name = 'test state';
      $scope.newState.city = 'test city';
      $scope.create($scope.newState);
      $httpBackend.flush();
      expect($scope.states[0].name).toBe('a diff state');
      expect($scope.newState).toEqual({});
    });

    it('should be able to update a state', function() {
      $httpBackend.expectPUT('/api/states', {name: 'test state', city: 'test city'})
    });

  });
});
