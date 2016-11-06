angular.module('myModel', ["ngRoute"])
        .config(function($routeProvider) {
          $routeProvider.when('/home', {
                            templateUrl: 'templates/home.html',
                            controller: "homeController"
                      }).when('/delay', {
                            templateUrl: 'templates/slow_page.html',
                            controller: "slowPageController",
                            resolve : {
                              headersData : function($http) {
                                return $http.get("https://httpbin.org/delay/2")
                                            .then(function(response){
                                              return response.data["headers"];
                                            });
                              }
                            }
                      }).otherwise({
                        redirectTo: '/home'
                      })
        })
        .controller("homeController", function($scope){
            $scope.header = "Home Page";
        })
        .controller("slowPageController", function($scope, headersData){
            $scope.header = "Slow Page";
            $scope.headers = headersData;
        })
