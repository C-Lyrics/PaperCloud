'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Keyword
 * @description
 * # Keyword
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Keyword', function($http, Server) {

        var keywordApi = Server.ServerUrl + 'keyword/';

        return {

            /**
             * [getPapers description]
             * @param  {[type]}   phrase   [description]
             * @param  {Function} callback [description]
             * @return {[type]}            [description]
             */
            getPapers: function(phrase, callback) {
                //calls back
                $http(keywordApi + phrase)
                    .get(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);
            },
        };
    });
