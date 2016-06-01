angular
  .module('app', ['ui.router', 'lbServices'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('all-tasks');
    $stateProvider
      .state('all-tasks', {
        url: '/tasks',
        templateUrl: 'views/tasks/index.html',
        controller: 'AllTasksController'
      })
      .state('add-task', {
        url: '/tasks/new',
        templateUrl: 'views/tasks/new.html',
        controller: 'AddTaskController'
      })
  }])