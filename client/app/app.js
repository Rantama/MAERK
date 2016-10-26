'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'validation.match', 'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.otherwise('/login');
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
    $locationProvider.html5Mode(true);
  });
