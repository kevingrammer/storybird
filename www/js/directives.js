angular.module('app.directives', [])

  .directive('sbEgg', ['Camera', function(Camera) {
    return {
      templateUrl: 'templates/sb-egg.html',
      restrict: 'AE',
      transclude: true,
      scope: {
        eggTitle: '=sbEggTitle',
        eggContent: '=sbEggContent'
      },
      link: function(scope, element, attrs) {

        scope.getPhoto = function() {
          Camera.getPicture().then(function(imageURI) {
            console.log(imageURI);
          }, function(err) {
            console.err(err);
          });
        };

      }
    }
  }])

  ;
