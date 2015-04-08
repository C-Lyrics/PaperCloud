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
                        debugger;
                        $compile(element.contents())(scope);
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
