module.exports = exports = function(app) {
  app.controller('AllStatesController', ['$scope', '$http', function($scope, $http) {
    $http.get('/api/allstates')
      .then(function(res) {
        $scope.states = res.data;
      }, function(err) {
        console.log(err);
      });
  }])
}
