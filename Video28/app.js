angular.module('myModel', ["ngRoute"])
        .config(function($routeProvider) {
          $routeProvider.when('/home', {
                            templateUrl: 'templates/home.html',
                            controller: "homeController"
                      }).when('/courses', {
                            templateUrl: 'templates/courses.html',
                            controller: "coursesController"
                      }).when('/students', {
                            templateUrl: 'templates/students.html',
                            controller: "studentsController"
                      }).otherwise({
                        redirectTo: '/home'
                      })
        })
        .controller("homeController", function($scope){
            $scope.header = "Home Page";
        })
        .controller("coursesController", function($scope, $http){
            $scope.header = "Courses";
            $http.get("data/courses.json")
                 .then(function(response){
                   $scope.courses = response.data;
                 });
        })
        .controller("studentsController", function($scope, $http){
            $scope.header = "Students";
            $http.get("data/students.json")
                 .then(function(response){
                   $scope.students = response.data;
                 });
        })
