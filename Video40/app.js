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
                      }).when('/students/:id', {
                            templateUrl: 'templates/studentDetails.html',
                            controller: "studentDetailsController"
                      }).when('/studentSearch/:name?', {
                            templateUrl: 'templates/studentSearch.html',
                            controller: 'studentSearchController'
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
        .controller("studentsController", function($scope, $http, $rootScope, $location){
            $scope.$on("$routeChangeStart", function(evt, next, curr) {
              console.log("Route Change Start");
              console.log(evt, next, curr);
            });
            $scope.$on("$locationChangeStart", function(evt, next, curr) {
              console.log("Location Change Start");
              console.log(evt, next, curr);
            });
            $scope.$on("$locationChangeSuccess", function(evt, next, curr) {
              console.log("Location Change Success");
              console.log(evt, next, curr);
            });
            $scope.$on("$routeChangeSuccess", function(evt, next, curr) {
              console.log("Route Change Success");
              console.log(evt, next, curr);
            });

            $scope.header = "Students";
            $http.get("data/students.json")
                 .then(function(response){
                   $scope.students = response.data;
                 });

            $scope.searchStudent = function() {
              if($scope.name) {
                console.log("Searching for student :", $scope.name);
                $location.url("/studentSearch/" + $scope.name);
              }
              else {
                console.log("Searching for all students");
                $location.url("/studentSearch");
              }
            }

        })
        .controller("studentDetailsController", function($scope, $http, $routeParams, $filter){
            $scope.header = "Student Details";
            $http.get("data/students.json")
                 .then(function(response){
                   $scope.student = $filter('filter')(
                                                        response.data,
                                                        {id: $routeParams.id}
                                                     )[0];
                 });

        })
        .controller("studentSearchController", function($scope, $routeParams, $http, $filter){
          console.log("route params :", $routeParams);
          $scope._customFilter = function(item) {
            //console.log(item);
            return (
              (item.first_name + item.last_name).toLowerCase().search($routeParams.name.toLowerCase()) !== -1
            );
          }
          $scope.header = "Student Search";
          if($routeParams.name) {
            $http.get("data/students.json")
                 .then(function(response){
                   $scope.students = $filter('filter')(response.data, $scope._customFilter);
                 });
          }
          else {
            $http.get("data/students.json")
                 .then(function(response){
                   $scope.students = response.data;
                 });
          }
        })
