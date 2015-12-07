module.exports = exports = function(app) {
  app.controller('StatesController', ['$scope', '$http', 'cfResource', function($scope, $http, cfResource) {
    $scope.states = []; // Will be bound to the array, will not look elsewhere
    $scope.errors = [];
    //$scope.inputDefaults = {name: 'State', city: 'City'};
    $scope.newState = {}; //angular.copy($scope.inputDefaults);
    var statesResource = cfResource('states');

    $scope.getAll = function() {
      statesResource.getAll(function(err, data) {
        if (err) return err;

        $scope.states = data;
      });
    };

    $scope.edit = function(state) {
      state.editing = !state.editing;
      state.currentName = state.name;
    }

    $scope.cancel = function(state) {
      state.name = state.currentName;
    }

    $scope.toggleCity = function(state) {
      state.toggleCity = !state.toggleCity
    }

    $scope.create = function(state) {
      statesResource.create(state, function(err, data) {
        if (err) return err;
        $scope.states.push(data);
        $scope.newState = {};
      });
    };

    $scope.update = function(state) {
      state.editing = false;
      $http.put('/api/states/' + state._id, state)
      .then(function(res) {
        console.log('this state has a new name');
      }, function(err) {
        $scope.errors.push('could not get State: ' + state.name);
        console.log(err.data);
      });
    };

    $scope.remove = function(state) {
      $scope.states.splice($scope.states.indexOf(state), 1);
      $http.delete('/api/states/' + state._id)
        .then(function(res) {
          console.log('State removed');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('could not remove State: ' + state.name);
          $scope.getAll();
        });
    };
  }]);
};
