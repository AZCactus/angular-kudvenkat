angular.module('myModel', [])
       .controller("countryController", function($scope){
         $scope.name = this.name = "India";
       })
       .controller("stateController", function($scope){
         $scope.name = this.name = "Maharashtra"
       })
       .controller("cityController", function($scope){
         $scope.name = this.name = "Pune"
       })
