angular.module('myModule', []).controller("myController", function($scope){
  $scope.employees = [
    {firstName: 'Deepak', lastName: 'Champatiray', doj: (new Date("2008-07-21"))},
    {firstName: 'Sumit', lastName: 'Arora', doj: (new Date("2008-09-12"))},
    {firstName: 'Neha', lastName: 'Chaturvedi', doj: (new Date("2010-12-01"))}
  ];

  $scope.countries = [
    {
      name: 'UK',
      cities: ['London', 'Birmingham', 'Manchester']
    },
    {
      name: 'USA',
      cities: ['Cleveland', 'Ann Arbor', 'New York']
    },
    {
      name: 'India',
      cities: ['Bhubaneswar', 'Pune', 'Mumbai']
    }
  ];
})
