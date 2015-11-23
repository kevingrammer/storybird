angular.module('app.directives', [])
  .directive('sbEgg', function() {
    return {
      templateUrl: 'templates/sb-egg.html',
      restrict: 'AE',
      transclude: true,
      scope: {
        eggTitle: '=sbEggTitle',
        eggContent: '=sbEggContent'
      },
      link: function postLink(scope, element, attrs) {
      }
    }
  })
  ;
