angular.module('myModel', []).controller("myController", function($scope){
  $scope.numRows = 5;
  $scope.orderBy = "email";
  $scope.employees = [{
                        "first_name": "Antonio",
                        "last_name": "Burke",
                        "email": "aburke0@pinterest.com",
                        "gender": "Male",
                        "dateOfBirth": "1989-03-09T14:53:36Z",
                        "salary": 13210.57
                      }, {
                        "first_name": "Louise",
                        "last_name": "Nguyen",
                        "email": "lnguyen1@nationalgeographic.com",
                        "gender": "Female",
                        "dateOfBirth": "1966-11-16T02:44:05Z",
                        "salary": 18747.75
                      }, {
                        "first_name": "Phyllis",
                        "last_name": "Stone",
                        "email": "pstone2@pinterest.com",
                        "gender": "Female",
                        "dateOfBirth": "1965-12-18T11:22:02Z",
                        "salary": 41927.87
                      }, {
                        "first_name": "Christine",
                        "last_name": "Williamson",
                        "email": "cwilliamson3@cargocollective.com",
                        "gender": "Female",
                        "dateOfBirth": "1979-02-23T13:28:13Z",
                        "salary": 45238.2
                      }, {
                        "first_name": "Stephen",
                        "last_name": "Gardner",
                        "email": "sgardner4@instagram.com",
                        "gender": "Male",
                        "dateOfBirth": "1962-08-12T01:56:52Z",
                        "salary": 99711.44
                      }, {
                        "first_name": "Jacqueline",
                        "last_name": "Jenkins",
                        "email": "jjenkins5@blogtalkradio.com",
                        "gender": "Female",
                        "dateOfBirth": "1966-11-10T17:07:37Z",
                        "salary": 94271.05
                      }, {
                        "first_name": "Martin",
                        "last_name": "Sanchez",
                        "email": "msanchez6@altervista.org",
                        "gender": "Male",
                        "dateOfBirth": "1984-11-30T04:55:23Z",
                        "salary": 37845.45
                      }, {
                        "first_name": "Amanda",
                        "last_name": "Cooper",
                        "email": "acooper7@webs.com",
                        "gender": "Female",
                        "dateOfBirth": "1971-07-16T11:55:52Z",
                        "salary": 11461.38
                      }, {
                        "first_name": "Stephanie",
                        "last_name": "Bell",
                        "email": "sbell8@mapquest.com",
                        "gender": "Female",
                        "dateOfBirth": "1969-02-10T10:26:39Z",
                        "salary": 98571.25
                      }, {
                        "first_name": "Jesse",
                        "last_name": "Jones",
                        "email": "jjones9@ibm.com",
                        "gender": "Male",
                        "dateOfBirth": "1962-12-27T09:33:47Z",
                        "salary": 77097.53
                      }];

    $scope.getKeys = function(obj) {
      return Object.keys(obj);
    }
})
