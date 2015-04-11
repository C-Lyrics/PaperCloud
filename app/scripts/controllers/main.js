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
            isEmpty, initProgressBar, removeProgressBar;

        $scope.words = [];

        isEmpty = function(phrase) {
            var empty = !phrase;
            if (empty) {
                alert('Please enter a non empty search');
            }
            return empty;
        };

    initProgressBar = function(callback) {
        document.getElementById('progress').innerHTML = '<div id="prog-bar"></div>';
        var ProgressBar = require('progressbar.js');
        var line = new ProgressBar.Line('#prog-bar', {
            color: '#FCB03C',
            strokeWidth: 2,
            trailWidth: 1,
            duration: 2500,
            text: {
                value: '0'
            },
            step: function(state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        });
        line.animate(1);
        callback();
        return line;
    };

    removeProgressBar = function(line) {
        // document.getElementById('progress').innerHTML = '';
    };
       

        /**
         * [launchNameSearch description]
         * @param  {[]} [uses the function 'getpapers' to get all research appers from the given
                         search term and assign the words scope to the topWords of the paper]
         */
        $scope.launchNameSearch = function() {
            var line, 
            name = $scope.nameSearch.trim();
            if (isEmpty(name)) {
                return;
            }
            line = initProgressBar(function() {
            Researcher.getPapers(name, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers); //function in services/papers.js
            });
            removeProgressBar();
            });
        };

        /**
         * [launchKeywordSearch description]
         * @param  {[]} [uses the function 'getpapers' to get all research appers from the given
                         search term and assign the words scope to the topWords of the paper]
         */
        $scope.launchKeywordSearch = function() {
            var line,
            phrase = $scope.keywordSearch.trim();
            if (isEmpty(phrase)) {
                return;
            }
            line = initProgressBar(function() {
            Keyword.getPapers(phrase, function(papers) {
                $scope.words = Papers.getTopWords(nbTopWords, papers); //function in services/papers.js
            });
            removeProgressBar();
            });
        };

    });
