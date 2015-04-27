'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('ListingCtrl', function($scope, $routeParams, Papers, Server) {
        $scope.word = $routeParams.word;

        $scope.papers = Papers.cached.map(function(curr, idx) {
            curr.count = Papers.countFrequency($scope.word, curr.content);
            return curr;
        });

        $scope.papers = $scope.papers.filter(function(curr, idx) {
            return curr.count > 0;
        });
        $scope.navigateToCloud = "#/";
    });
