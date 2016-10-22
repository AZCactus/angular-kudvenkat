angular.module('myModel', ["ngRoute"])
        .config(function($routeProvider) {
          $routeProvider.when('/home', {
                            templateUrl: 'templates/home.html',
                            controller: "homeController",
                            controllerAs: "homeCtrl"
                      }).when('/courses', {
                            templateUrl: 'templates/courses.html',
                            controller: "coursesController",
                            controllerAs: "coursesCtrl"
                      }).when('/students', {
                            templateUrl: 'templates/students.html',
                            controller: "studentsController",
                            controllerAs: "studentsCtrl"
                      }).when('/students/:id', {
                            templateUrl: 'templates/studentDetails.html',
                            controller: "studentDetailsController",
                            controllerAs: "studentDetailsCtrl"
                      }).otherwise({
                        redirectTo: '/home'
                      })
        })
        .controller("homeController", function(){
            this.header = "Home Page";
        })
        .controller("coursesController", function($http){
            this.header = "Courses";
            var vm = this;
            $http.get("data/courses.json")
                 .then(function(response){
                   vm.courses = response.data;
                 });
        })
        .controller("studentsController", function($http){
            this.header = "Students";
            var vm = this;
            $http.get("data/students.json")
                 .then(function(response){
                   vm.students = response.data;
                 });

        })
        .controller("studentDetailsController", function($http, $routeParams, $filter){
            this.header = "Student Details";
            var vm = this;
            $http.get("data/students.json")
                 .then(function(response){
                   vm.student = $filter('filter')(
                                                        response.data,
                                                        {id: $routeParams.id}
                                                     )[0];
                 });

        })
