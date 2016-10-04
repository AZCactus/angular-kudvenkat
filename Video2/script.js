// var myApp = angular.module('myModule', []);
// var myController = function($scope) {
//   $scope.message = "AngularJS Tutorial";
// };
// myApp.controller("myController", myController);
var myApp = angular.module('myModule', []).controller('myController', function($scope) {
    $scope.message = "Angular Tutorial";
})
