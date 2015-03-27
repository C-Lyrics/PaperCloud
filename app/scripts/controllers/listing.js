'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ListingCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
