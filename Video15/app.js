angular.module('myModel', []).controller("myController", function($scope){
  $scope.countries = [
    {
      name : 'India',
      cities : [
        {name: 'Delhi'},
        {name: 'Mumbai'},
        {name: 'Kolkata'},
        {name: 'Chennai'}
      ]
    },
    {
      name : 'USA',
      cities : [
        {name: 'New York'},
        {name: 'Los Angles'},
        {name: 'Miami'},
        {name: 'Denver'}
      ]
    }
  ];
})
