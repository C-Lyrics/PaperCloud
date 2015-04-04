'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Server
 * @description
 * # Server
 * Service in the frontendApp.
 */
angular.module('frontendApp')
    .service('Server', function() {

        this.Url = 'http://localhost:9000/';

        this.ServerUrl = 'http://localhost:9000/';

        this.errorHandler = function(data, a, b, c) {
            alert('Error while loading data: Check the console for logs');
            console.log(data, a, b, c);
        };
    });
