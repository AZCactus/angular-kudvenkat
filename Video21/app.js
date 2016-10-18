angular.module('myModel', []).controller("myController", function($scope, $location, $anchorScroll){
  $scope.scrollTo = function(scrollLoc) {
    $location.hash(scrollLoc);
    $anchorScroll.yOffset = 20;
    $anchorScroll();
  }
})
