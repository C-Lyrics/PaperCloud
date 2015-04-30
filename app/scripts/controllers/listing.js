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

        /**
         * [returns to the main page and generates a new search]
         * @param  {string} [takes in title of paper]
         * @return {[]} [returns nothing]
         */
        $scope.reSearch = function(word) {
            Papers.lastSearch = {
                input: word,
                researcher: false,
            };
            window.location = '#/';
        };

        $scope.papers = Papers.cached.map(function(curr, idx) {
            curr.count = Papers.countFrequency($scope.word, curr.content);
            return curr;
        });

        $scope.papers = $scope.papers.filter(function(curr, idx) {
            return curr.count > 0;
        });
        $scope.navigateToCloud = "#/";
    });
