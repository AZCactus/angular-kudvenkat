angular.module('myModel', [])
       .controller("countryController", function($scope){
         $scope.name = "India";
       })
       .controller("stateController", function(){
         this.name = "Odisha";
       })
