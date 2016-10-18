angular.module('myModel', []).controller("myController", function($scope, $http, $location, $anchorScroll){
  $http.get('cities.json')
       .then(function(response){
         $scope.countries = response.data;
       });

  $scope.scrollTo = function(idx) {
    $location.hash('country_' + idx);
    $anchorScroll();
  }
})
