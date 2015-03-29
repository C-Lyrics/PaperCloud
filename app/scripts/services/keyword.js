'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Keyword
 * @description
 * # Keyword
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('Keyword', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
