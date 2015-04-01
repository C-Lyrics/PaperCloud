'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Researcher
 * @description
 * # Researcher
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Researcher', function(Server) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            getAutocomplete: function(text, callback) {

            },

            getPapers: function(name, callback) {

            },
        };
    });
