'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Keyword
 * @description
 * # Keyword
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Keyword', function($http, $timeout, Server, Papers) {

        var keywordApi = Server.ServerUrl + 'IEEE/v2/keyword/',
            ieeeAPI = Server.ServerUrl + 'IEEE/keyword/',
            ieeePapersAPI = Server.ServerUrl + 'IEEE/id/';

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
                    $timeout(function() {
                        return callback(Papers.papersMockup);
                    }, 6500);
                    return;
                }
                $http.get(keywordApi + phrase, {
                    cache: true
                })
                    .then(function(response) {
                        Papers.cached = response.data;
                        callback(response.data);
                    }, Server.errorHandler); //send an error message if something was wrong in the process of grabbing all papers from API
            },

            getPapersUpdateProgress: function(phrase, updater, callback) {
                Papers.cached = [];
                $http.get(ieeeAPI + phrase, {
                    cache: true
                })
                    .then(function(res) {
                        var i, papersId = res.data;
                        for (i = 0; i < papersId.length; i++) {
                            $http.get(ieeePapersAPI + papersId[i], {
                                cache: true,
                            })
                                .then(function(res2) {
                                    var val = updater.value();
                                    updater.set(val + .05);
                                    Papers.cached.push(res2.data[0]);
                                    callback(Papers.cached);
                                }, Server.errorHandler);
                        }
                    }, Server.errorHandler);
            },
        };
    });
