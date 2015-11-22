angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Routes
  $stateProvider
    .state('storybird', {
      url: '/home',
      templateUrl: 'templates/storybird.html',
      controller: 'storybirdCtrl'
    })
    .state('newFlight', {
      url: '/newflight',
      templateUrl: 'templates/newFlight.html',
      controller: 'newFlightCtrl'
    })
    ;
  // Default route
  $urlRouterProvider.otherwise('/home');

});