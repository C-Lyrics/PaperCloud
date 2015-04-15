'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('ListingCtrl', function($scope, $routeParams, Papers) {
        $scope.word = $routeParams.word;

        $scope.papers = Papers.cached.map(function(idx, curr) {
            return {
                title: 'esdgdfg',
                count: 'sdfgsdfg',
            };
        });
    });
