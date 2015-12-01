module.exports = exports = function(app) {
  app.controller('StatesController', ['$scope', '$http', function($scope, $http) {
    $scope.states = []; // Will be bound to the array, will not look elsewhere
    $scope.newState = null;

    $scope.getAll = function() {
    $http.get('/api/states') // Haven't told what to do once request has been completed
      .then(function(res) {  //  $http returns a q Promise that we call `then` on
        $scope.states = res.data;
      }, function(res) {
        console.log(err.data);
      });
    };

    scope.create = function(state) {
      $http.post('/api/states', state)
        .then(function(res) {
          $scope.states.push(res.data);
          $scope.newState = null;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.update = function(state) {
      state.editing = false;
      $http.put('/api/states' + state._id, state)
      .then(function(res) {
        console.log('this state has a new name');
      }, function(err) {
        console.log(err.data);
      });
    };

    $scope.remove = function(state) {
      $scope.states.splice($scope.states.indexOf(state), 1);
      $http.delete('/api/states' + state._id)
        .then(function(res) {
          console.log('totes cool, state removed');
        }, function(err) {
          console.log(err.data);
          $scope.getAll();
        });
    };
  }]);
};
