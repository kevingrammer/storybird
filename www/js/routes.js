angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

  // Whitelist the camera img routes
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

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