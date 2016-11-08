angular.module('myModel', ["ui.router"])
.config(function($stateProvider){
  $stateProvider.state('home', {
                  url: '/home',
                  templateUrl: 'templates/home.html',
                  controller: 'homeController',
                  controllerAs: 'homeCtrl'
                })
                .state('students', {
                  url: '/students',
                  templateUrl: 'templates/students.html',
                  controller: 'studentController',
                  controllerAs: 'studentCtrl'
                })
                .state('studentDetails', {
                  url: '/students/:id',
                  templateUrl: 'templates/studentDetails.html',
                  controller: 'studentDetails',
                  controllerAs: 'studentDetailsCtrl'
                })
                .state('studentSearch', {
                  url: '/studentSearch/:first_name/:last_name',
                  params: {
                    first_name: '',
                    last_name: ''
                  },
                  templateUrl: 'templates/studentSearch.html',
                  controller: 'studentSearchController',
                  controllerAs: 'studentSearchCtrl'
                })
})
.controller("homeController", function(){
  var vm = this;

  vm.header = "Home Page";
  vm.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
})
.controller("studentController", function($http, $state){
  var vm = this;

  vm.header = "Student Page";
  $http.get('data/students.json')
       .then(function(response){
         vm.students = response.data;
       });

  vm.search = function() {
    $state.go('studentSearch', {first_name: vm.first_name, last_name: vm.last_name});
  }
})
.controller("studentDetails", function($http, $filter, $stateParams){
  var vm = this;

  vm.header = "Student Details";
  $http.get('data/students.json')
       .then(function(response){
         vm.student = $filter('filter')(response.data, {id: $stateParams.id})[0]
       });
})
.controller("studentSearchController", function($http, $filter, $stateParams){
  var vm = this;

  console.log($stateParams);

  vm.header = "Student Search";
  $http.get('data/students.json')
       .then(function(response) {
         vm.students = $filter('filter')(response.data, {
           first_name: $stateParams.first_name,
           last_name: $stateParams.last_name
         })
       });
})
