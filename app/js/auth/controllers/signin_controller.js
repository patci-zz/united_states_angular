module.exports = exports = function(app) {
  app.controller('SigninController', ['$scope', '$http', '$location', 'cookies', '$base64', function($scope, $http, $location, $cookies, $base64) {
    $scope.headingText = 'Sign in to Existing User';
    $scope.buttonText = 'Kenny Log Ins';

    $scope.authenticate = function(user) {
      $http({
        method: 'GET',
        url: '/api/signin',
        headers: {
          'Authorization': 'Basic ' + $base64.encode(user.username + ':' + user.password)
        }
      })
      .then(function(res) {
        $cookies.put('token', res.data.token);
        $scope.getUser();
        $location.path('/states');
      }, function(err) {
        console.log(err);
      });
    };

    $scope.changePlaces = function() {
      $location.path('/signup');
    };
  }]);
};
