angular
  .module('app')
  .controller('LoginController', function ($rootScope, $scope, $state, User) {
    $scope.user = {}

    $scope.login = function () {
      User.login($scope.user, function () {
        $rootScope.userAuthenticated = true
        $state.go('all-tasks')
      })
    }
  })

  .controller('LogoutController', function (User, $rootScope, $state) {
    User.logout()
    $rootScope.userAuthenticated = false
    $state.go('login')
  })