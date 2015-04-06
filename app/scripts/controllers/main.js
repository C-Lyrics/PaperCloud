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
         * @return {[type]} [description]
         */
        $scope.launchNameSearch = function() {
            alert($scope.nameSearch);
            /*
             * TODO: Implement the function.
             * It should get the correct search value, strip it, and call the
             * good Factory's function. This means defining the call back when
             * the service returns something. The callback essentially means
             * generating the word cloud from the response of the service.
             */
        };

        /**
         * [launchKeywordSearch description]
         * @return {[type]} [description]
         */
        $scope.launchKeywordSearch = function() {
            var phrase = $scope.keywordSearch;
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
