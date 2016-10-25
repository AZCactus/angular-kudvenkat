angular.module('myModel', ['ngRoute'])
       .config(function($routeProvider){
         $routeProvider.caseInsensitiveMatch = true;
         $routeProvider.when('/home', {
           templateUrl : 'templates/home.html',
           controller : 'homeController',
           controllerAs : 'home'
         }).when('/students', {
           templateUrl : 'templates/students.html',
           controller : 'studentsController',
           controllerAs : 'students'
         }).otherwise({
           redirectTo : '/home'
         })
       })
       .controller("homeController", function(){
         this.message = 'Home Page';
       })
       .controller("studentsController", function($http, $route){
         console.log('Loading Students');
         this.message = 'Students Page';
         var vm = this;
         $http.get('data/students.json', {cache: false})
              .then(function(response){
                console.log("Processing response", response);
                vm.student_list = response.data;
              });

         vm.reloadData = function(){
           console.log("reload students", vm);
           vm.message = "Reloading ...";
           vm.student_list = null;
           $route.reload();
         }
       })
