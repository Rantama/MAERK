'use strict';

angular.module('maerkApp')
      .config(function($stateProvider) {
        $stateProvider.state('main', {
          url: '/',
          template: '<main class = "flex layout-column"></main>'
      })
     .state('main.employee', {
      url: '/employee',
      templateUrl: 'app/main/employee/employee.html',
      controller: 'EmployeeController',
      controllerAs: 'vm',
      authenticate: true
  });
});
