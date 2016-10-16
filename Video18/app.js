angular.module('myModel', []).controller("myController", function($scope, $http, $log){
  
  $http({
            method: 'GET',
            url: 'http://httpbin.org/headers'
        })
        .then(function(response){
          $log.info(response);
          $scope.response = response.data;
          $scope.error = null;
        }, function(error){
          $log.error(error);
          $scope.response = null;
          $scope.error = error.statusText;
        })
})
