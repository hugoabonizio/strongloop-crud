angular
  .module('app')
  .controller('LoginController', function ($scope, $state, User) {
    $scope.user = {}

    $scope.login = function () {
      User.login($scope.user, function () {
        $state.go('all-tasks')
      })
    }
  })