angular
  .module('app', ['ui.router', 'lbServices'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tasks')
    $stateProvider
      .state('all-tasks', {
        url: '/tasks',
        templateUrl: 'views/tasks/index.html',
        controller: 'AllTasksController'
      })
      .state('add-task', {
        url: '/tasks/new',
        templateUrl: 'views/tasks/new.html',
        controller: 'AddTaskController',
        resolve: {
          access: ['User', function (User) { return User.isAuthenticated() }]
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
  }])
  .run(['$rootScope', '$state', 'User', function ($rootScope, $state, User) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (!User.isAuthenticated() && toState.name != 'login') {
        event.preventDefault()
        $state.go('login')
      }
      // console.log(User.isAuthenticated(), toState)
    })
  }])