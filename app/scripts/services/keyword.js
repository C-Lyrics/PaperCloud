'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Keyword
 * @description
 * # Keyword
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Keyword', function($http, Server, Papers) {

        var keywordApi = Server.ServerUrl + 'keyword/';

        return {

            /**
             * [getPapers description]
             * @param  {[type]}   phrase   [used as a search term to collect all research papers]
             * @param  {Function} callback [if grabbing research papers from API is successful,
                                           it proceeds with the passed in function (reference in main.js)]
             * @return {[type]}            [will return all papers from the search]
             */
            getPapers: function(phrase, callback) {
                if (!Server.prod) {
                    return callback(Papers.papersMockup);
                }
                $http.get(keywordApi + phrase)
                    .then(function(response) {
                        callback(response.data);
                    }, Server.errorHandler); //send an error message if something was wrong in the process of grabbing all papers from API
            },
        };
    });
