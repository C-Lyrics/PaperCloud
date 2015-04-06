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
         * [launchNameSearch description]
         * @return {[type]} [description]
         */
        $scope.launchNameSearch = function() {
            var name = $scope.nameSearch.trim();
            Researcher.getPapers(name, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers);
            });
        };

        /**
         * [launchKeywordSearch description]
         * @return {[type]} [description]
         */
        $scope.launchKeywordSearch = function() {
            var phrase = $scope.keywordSearch.trim();
            Keyword.getPapers(phrase, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers);
            });

            /*
             * TODO: Implement the function.
             * It should get the correct search value, strip it, and call the
             * good Factory's function. This means defining the call back when
             * the service returns something. The callback essentially means
             * generating the word cloud from the response of the service.
             */
        };

    });
