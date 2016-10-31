(function(){
  'use strict';
 // angular.module('maerkApp', ['ngMaterial', 'mdDataTable']);
  angular.module('maerkApp')
    .controller('EmployeeController', function($scope, $mdToast) {
      $scope.deleteRowCallback = function(rows) {
        $mdToast.show(
          $mdToast.simple()
          .content('Deleted row id(s): ' + rows)
          .hideDelay()
        );
      };


      $scope.EmployeeInfo = [
    {
        name: 'Joe Kimble',
        clients: 'IBM',
        skills: 'Typing',
        recruiter: 'Tim Tebow',
        revenue: 12.50
      },
      {
        name: 'John Rambo',
        clients: 'Army Reserve',
        skills: 'killing',
        recruiter: 'Sylverster Stallone',
        revenue: 100000000
      },
      {
        name: 'John Matrix',
        clients: 'Terminator',
        skills: 'I\'ll be back',
        recruiter: 'Arnold Schwarzenegger',
        revenue: 100000001
      },
      {
        name: 'Neo',
        clients: 'The Matrix',
        skills: 'I am the One',
        recruiter: 'Keanu Reeves',
        revenue: 12403204
      },
      {
        name: 'Hulk',
        clients: 'Gamma Rays',
        skills: 'hulk smash',
        recruiter: 'Dr. Banner',
        revenue: '-'+100000000000
      },
      {
        name: 'Goku',
        clients: 'Kami',
        skills: 'Kamehameha',
        recruiter: 'King Kai',
        revenue: 0
      },
      {
        name: 'Vegeta',
        clients: 'Bulma',
        skills: 'It\'s over 9000',
        recruiter: 'Goku',
        revenue: 100000003
      },
      {
        name: 'Black Widow',
        clients: 'Shield',
        skills: 'Assassination',
        recruiter: 'Nick Fury',
        revenue: 50000
      },
      {
        name: 'Ironman',
        clients: 'Stark Enterprise',
        skills: 'Advance Technology',
        recruiter: 'Himself',
        revenue: 25000000000
      }

    ];

   });
}());
