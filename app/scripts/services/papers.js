'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Papers
 * @description
 * # Papers
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('Papers', function () {
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
