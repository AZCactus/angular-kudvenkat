angular.module('myModel', []).controller("myController", function($scope, stringService){
  $scope.toCamelCase = function(input) {
    $scope.outputStr = stringService.toCamelCase(input);
  }
})
