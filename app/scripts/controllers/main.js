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

        /**
         * [launchNameSearch description]
         * @return {[type]} [Uses the function getpapers to get all research papers from the given search term
                             and assigns the words scope to the topWords of the paper ]
         */
        $scope.launchNameSearch = function() {
            var name = $scope.nameSearch.trim();
            Researcher.getPapers(name, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers);//function in services/papers.js
            });
        };

        /**
         * [launchKeywordSearch description]
          * @return {[type]} [Uses the function getpapers to get all research papers from the given search term
                             and assigns the words scope to the topWords of the paper ]
         */
        $scope.launchKeywordSearch = function() {
            var phrase = $scope.keywordSearch.trim();
            Keyword.getPapers(phrase, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers);//function in services/papers.js
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
