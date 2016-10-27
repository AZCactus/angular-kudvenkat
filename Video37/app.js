angular.module('myModel', [])
       .controller("controller1", function($scope, $rootScope){
         this.name = "I'm Controller 1";
         $rootScope.name = "I'm omnipresent";
       })
       .controller("controller2", function($scope){
         this.name = "I'm Controller 2";
       })
       .controller("twoWayController", function($rootScope){
         this.root = $rootScope;
       })
