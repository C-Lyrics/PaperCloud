'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function($scope, Keyword, Researcher, Papers) {
        var nbTopWords = 250,
            isEmpty;

        $scope.words = [];

        isEmpty = function(phrase) {
            var empty = !phrase;
            if (empty) {
                alert('Please enter a non empty search');
            }
            return empty;
        };

        /**
         * [launchNameSearch description]
         * @param  {[]} [uses the function 'getpapers' to get all research appers from the given
                         search term and assign the words scope to the topWords of the paper]
         */
        $scope.launchNameSearch = function() {
            var name = $scope.nameSearch.trim();
            if (isEmpty(name)) {
                return;
            }
            Researcher.getPapers(name, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers); //function in services/papers.js
            });
        };

        /**
         * [launchKeywordSearch description]
         * @param  {[]} [uses the function 'getpapers' to get all research appers from the given
                         search term and assign the words scope to the topWords of the paper]
         */
        $scope.launchKeywordSearch = function() {
            var phrase = $scope.keywordSearch.trim();
            if (isEmpty(phrase)) {
                return;
            }
            Keyword.getPapers(phrase, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers); //function in services/papers.js
            });
        };

    });
