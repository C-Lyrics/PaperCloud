'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Researcher
 * @description
 * # Researcher
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Researcher', function($http, Server) {

        var nameApi = Server.ServerUrl + 'name/';
        var acApi = Server.ServerUrl + 'name_ac/';

        // Public API here
        return {
            /**
             * [getAutocomplete description]
             * @param  {[type]}   name     [description]
             * @param  {Function} callback [description]
             * @return {[type]}            [description]
             */
            getAutocomplete: function(name, callback) {
                $http(nameApi + name)
                    .get(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);
            },

            /**
             * [getPapers description]
             * @param  {[type]}   name     [description]
             * @param  {Function} callback [description]
             * @return {[type]}            [description]
             */
            getPapers: function(name, callback) {
                $http(acApi + name)
                    .get(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);
            },
        };
    });
