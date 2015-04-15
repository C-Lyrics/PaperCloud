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

        $scope.papers = Papers.cached.map(function(curr, idx) {
            return {
                title: curr.title,
                count: Papers.countFrequency($scope.word, curr.content),
            };
        });

        $scope.papers = $scope.papers.filter(function(curr, idx) {
            return curr.count > 0;
        });
    });
