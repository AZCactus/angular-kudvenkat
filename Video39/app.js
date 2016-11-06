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
        .controller("studentsController", function($scope, $http, $rootScope){
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
