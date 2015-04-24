'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
    .module('frontendApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angular-jqcloud',
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/history', {
                templateUrl: 'views/history.html',
                controller: 'HistoryCtrl'
            })
            .when('/listing/:word', {
                templateUrl: 'views/listing.html',
                controller: 'ListingCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
