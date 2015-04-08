'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Researcher
 * @description
 * # Researcher
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Researcher', function($http, Server, Papers) {

        var nameApi = Server.ServerUrl + 'name/';
        var acApi = Server.ServerUrl + 'name_ac/';
        // TODO: Add more names
        var mockupNames = ['Fake', ];

        // Public API here
        return {
            /**
             * [getAutocomplete description]
             * @param  {[type]}   name     [used as a search term to collect all research papers to generate Autocomplete]
             * @param  {Function} callback [if process goes well from grabbing from API, will prceed with passed function (callback)]
             * @return {[type]}            [will return autocompletes for the serach bars]
             */
            getAutocomplete: function(name, callback) {
                if (!Server.prod) {
                    return callback(mockupNames);
                }
                $http.get(nameApi + name)
                    .then(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);
            },

            /**
             * [getPapers description]
             * @param  {[type]}   name   [used as a search term to collect all research papers]
             * @param  {Function} callback [if grabbing research papers from API is successful,
                                           it proceeds with the passed in function (callback)]
             * @return {[type]}            [will return all papers from the search]
             */
            getPapers: function(name, callback) {
                if (!Server.prod) {
                    return callback(Papers.papersMockup);
                }
                $http.get(acApi + name)
                    .then(function(res) {
                        callback(res.data);
                    }, Server.errorHandler); //send an error message if something was wrong in the process of grabbing all papers from API
            },
        };
    });
