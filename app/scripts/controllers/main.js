'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function($scope, Keyword, Researcher) {
        var nbTopWords = 250;

        $scope.topWords = [{
            text: 'Hey',
            weight: 12,
            link: 'http://',
        }, {
            text: 'Ha',
            weight: 1,
            link: 'http://',
        }, {
            text: 'Hu',
            weight: 2,
            link: 'http://',
        }, {
            text: 'Ho',
            weight: 8,
            link: 'http://',
        }, {
            text: 'Hi',
            weight: 9,
            link: 'http://',
        }, ];

        /**
         * Uses the function getpapers to get all research papers from the
         * given search term and assigns the words scope to the topWords of
         * the paper
         * @return None
         */
        $scope.launchNameSearch = function() {
            var name = $scope.nameSearch.trim();
            Researcher.getPapers(name, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers); //function in services/papers.js
            });
        };

        /**
         * Uses the function getpapers to get all research papers from the
         * given search term and assigns the words scope to the topWords of
         * the paper
         * @return None
         */
        $scope.launchKeywordSearch = function() {
            var phrase = $scope.keywordSearch.trim();
            Keyword.getPapers(phrase, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers); //function in services/papers.js
            });
        };

    });
