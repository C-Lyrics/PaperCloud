'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function($scope, $timeout, Keyword, Researcher,
        Papers) {
        var nbTopWords = 250,
            isEmpty, initProgressBar, removeProgressBar, displayWordCloud;

        $scope.words = [];

        isEmpty = function(phrase) {
            var empty = !phrase;
            if (empty) {
                alert('Please enter a non empty search');
            }
            return empty;
        };

        initProgressBar = function(callback) {
            document.getElementById('progress')
                .innerHTML = '<div id="prog-bar"></div>';
            var line = new ProgressBar.Line('#prog-bar', {
                color: '#438BD2',
                strokeWidth: 2,
                trailWidth: 2,
                duration: 7500,
                text: {
                    value: '0',
                    color: '#000000',
                },
                step: function(state, bar) {
                    bar.setText((bar.value() * 100)
                        .toFixed(0));
                }
            });
            line.animate(1, function(){
                line.animate(0);
            });
            callback();
            return line;
        };

        removeProgressBar = function() {
            var removeProgress = document.getElementById('progress');
            removeProgress.innerHTML = '';
            $scope.keywordSearch = '';
            $scope.nameSearch = '';
        };


        displayWordCloud = function(line, papers) {
            line.set(1);
            $timeout(function() {
                removeProgressBar();
                $scope.words = Papers.getTopWords(
                    nbTopWords,
                    papers); //function in services/papers.js
            }, 100);
        };
        
        $scope.makePreviousSearch = function(searchConfig) {
            if (searchConfig.input.trim()) {
                if (searchConfig.researcher) {
                    return $scope.launchNameSearch(searchConfig.input);
                }
                else {
                    return $scope.launchKeywordSearch(searchConfig.input);
                }
            }
        };
        /**
         * [launchNameSearch description]
         * @param  {[]} [uses the function 'getpapers' to get all research appers from the given
                         search term and assign the words scope to the topWords of the paper]
         */
        $scope.launchNameSearch = function(phrase) {
            var line;
            phrase = phrase || $scope.nameSearch;
            phrase = phrase.trim();
            if (isEmpty(phrase)) {
                return;
            }
            Papers.lastSearch.researcher = false;
            Papers.lastSearch.input = phrase;
            line = initProgressBar(function() {
                Researcher.getPapers(name, function(papers) {
                    displayWordCloud(line, papers);
                });
            });
        };

        /**
         * [launchKeywordSearch description]
         * @param  {[]} [uses the function 'getpapers' to get all research appers from the given
                         search term and assign the words scope to the topWords of the paper]
         */
        $scope.launchKeywordSearch = function(phrase) {
            var line;
            phrase = phrase || $scope.keywordSearch;
            phrase = phrase.trim();
            if (isEmpty(phrase)) {
                return;
            }
            Papers.lastSearch.researcher = false;
            Papers.lastSearch.input = phrase;
            line = initProgressBar(function() {
                Keyword.getPapers(phrase, function(papers) {
                    displayWordCloud(line, papers);
                });
            });
        };

        $scope.makePreviousSearch(Papers.lastSearch);
    });
