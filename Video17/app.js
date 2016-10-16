angular.module('myModel', []).controller("myController", function($scope, $http){

  function refresh() {
    $http.get('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8')
       .then(function(response) {
         $scope.numbers = response.data.data;
       });
  }

  $scope.refresh = function() {
    refresh();
  }
})
