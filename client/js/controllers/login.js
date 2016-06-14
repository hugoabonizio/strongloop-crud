angular
  .module('app')
  .controller('LoginController', function ($scope, User) {
    $scope.user = {}

    $scope.login = function () {
      User.login($scope.user, function () {
        console.log(arguments)
      })
    }
  })