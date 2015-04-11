'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cPaperCloud
 * @description
 * # cPaperCloud
 */
angular.module('frontendApp')
    .directive('cPaperCloud', function($compile) {
        return {
            templateUrl: 'views/directives/cPaperCloud.html',
            restrict: 'EACM',
            replace: false,
            scope: {
                words: '=words',
            },
            link: function postLink(scope, element, attrs) {
                scope.bg = 'white';
                scope.$watch('words', function(oldVal, newVal) {
                    if (scope.words && scope.words.length) {
                        scope.wordsFormatted = scope.words.map(function(
                            curr, idx) {
                            /*
                             * This click, link and double click thing requires more thoughts.
                             */
                            curr.html = {
                                'ng-href': 'redirectTo',
                                'ondblclick': 'redirectTo("dbl")',
                            };
                            curr.link = 'redirectTo';
                            return curr
                        });
                    }
                });
                scope.width = 250;
                scope.color = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'];

                scope.test = function(a, s, d, f) {
                    debugger
                    alert(a);
                };
            }
        };
    });
