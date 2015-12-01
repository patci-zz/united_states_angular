module.exports = exports = function(app) {
  app.controller('StatesController', ['$scope', '$http', function($scope, $http) {
    $scope.states = []; // Will be bound to the array, will not look elsewhere

    $scope.getAll = function() {
    $http.get('/api/states') // Haven't told what to do once request has been completed
      .then(function(res) {  //  $http returns a q Promise that we call `then` on
        $scope.states = res.data;
      }, function(res) {
        console.log(err.data);
      });
    }
  }]);
};
