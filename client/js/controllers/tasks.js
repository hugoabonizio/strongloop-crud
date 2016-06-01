angular
  .module('app')
  .controller('AllTasksController', ['$scope', '$state', 'Task', function ($scope, $state, Task) {
    $scope.tasks = Task.find()
    $scope.update = function (task) {
      task.$save()
    }
  }])
  .controller('AddTaskController', ['$scope', '$state', 'Task', function ($scope, $state, Task) {
    $scope.task = {};
    $scope.save = function () {
      Task
        .create($scope.task)
        .$promise.then(function () {
          $state.go('all-tasks')
        })
    }
  }])