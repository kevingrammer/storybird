angular.module('app.directives', [])

.directive('sbEgg', [function(){
  return {
    templateUrl: 'templates/sb-egg.html',
    restrict: 'AE',
    transclude: true,
    scope: {
      eggContent: '=sbEggContent'
    },
    link: function postLink(scope. element, attrs) {
      scope.eggContent = scope.eggContent + '!';
    }
  }
}]);

