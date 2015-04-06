'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cPaperCloud
 * @description
 * # cPaperCloud
 */
angular.module('frontendApp')
    .directive('cPaperCloud', function() {
        return {
            templateUrl: 'views/directives/cPaperCloud.html',
            restrict: 'EACM',
            replace: false,
            scope: {
                // words: '=words',
            },
            link: function postLink(scope, element, attrs) {
                scope.bg = 'white';
                scope.words = [{
                    text: 'Hey',
                    weight: 12,
                }, {
                    text: 'Ha',
                    weight: 1,
                }, {
                    text: 'Hu',
                    weight: 2,
                }, {
                    text: 'Ho',
                    weight: 8,
                }, {
                    text: 'Hi',
                    weight: 9,
                }, ];
                scope.$watch('words', function(oldVal, newVal) {
                    if (scope.words && scope.words.length) {
                        // TODO: Remove this line.
                        // You have it already outside of the watch.
                        scope.bg = 'white';
                    }
                    // TODO: Doing the linking here is not a good idea.
                    // Probably move to the service.
                    // scope.words = scope.words.map(function(curr, idx) {
                    //     curr.link = '';
                    //     return curr;
                    // });

                });
                scope.width = 250;
                scope.color = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'];
            }
        };
    });
