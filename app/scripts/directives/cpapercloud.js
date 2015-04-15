'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:cPaperCloud
 * @description
 * # cPaperCloud
 */
angular.module('frontendApp')
    .directive('cPaperCloud', ['$location',
        function($location) {
            return {
                templateUrl: 'views/directives/cPaperCloud.html',
                restrict: 'EACM',
                replace: false,
                scope: {
                    words: '=words',
                },
                link: function postLink(scope, element, attrs) {
                    scope.clicks = 0;
                    var click_double = function(single, double, arg) {
                        scope.clicks++;
                        if (scope.clicks === 1) {
                            setTimeout(function() {
                                if (scope.clicks == 1) {
                                    single(arg);
                                }
                                else {
                                    double(arg);
                                }
                            }, 300);
                        }
                    };
                    scope.$watch('words', function(oldVal, newVal) {
                        scope.clicks = 0;
                        if (scope.words && scope.words.length) {
                            scope.wordsFormatted = scope.words.map(
                                function(
                                    curr, idx) {
                                    curr.handlers = {
                                        click: function(event) {
                                            click_double(
                                                function(event) {
                                                    scope.redirectTo(
                                                        curr.text);
                                                },
                                                function(event) {
                                                    scope.runNewSearch(
                                                        curr
                                                        .text);
                                                },
                                                event
                                            );
                                        }
                                    };
                                    return curr
                                });
                        }
                    });
                    scope.color = ['#FF0000', '#00FF00', '#0000FF',
                        '#FF00FF'
                    ];

                    scope.redirectTo = function(word) {
                        window.location = '#/listing/' + word;
                    };

                    scope.runNewSearch = function(word) {
                        alert('Generating new word cloud for: ' + word);
                    };
                }
            };
        }
    ]);
