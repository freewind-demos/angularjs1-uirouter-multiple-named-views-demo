const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('user', {
    url: '/user',
    views: {
      'header': {
        templateUrl: './templates/user-header.html'
      },
      'body': {
        templateUrl: './templates/user-body.html'
      }
    }
  });

  $stateProvider.state('admin', {
    url: '/admin',
    views: {
      'header': {
        templateUrl: './templates/admin-header.html'
      },
      'body': {
        templateUrl: './templates/admin-body.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/user')

});

