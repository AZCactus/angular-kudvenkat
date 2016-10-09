angular.module('myModel', []).controller("myController", function($scope){
  $scope.languages = [
    {
      name: "Java",
      likes: 0,
      dislikes: 0
    },
    {
      name: "C++",
      likes: 0,
      dislikes: 0
    },
    {
      name: "Javascript",
      likes: 0,
      dislikes: 0
    },
    {
      name: "Angular JS",
      likes: 0,
      dislikes: 0
    }
  ];

  $scope.incrementLikes = function(language) {
    language.likes++;
  };

  $scope.incrementDislikes = function(language) {
    language.dislikes++;
  };
})
