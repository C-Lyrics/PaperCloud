'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Papers
 * @description
 * # Papers
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Papers', function() {
        var extractWords, removeDuplicates, countFrequency,
            selectMostFrequents;

        /**
         * [extractWords description]
         * @param  {[type]} songs [description]
         * @return {[type]}       [description]
         */
        extractWords = function(songs) {
            // TODO: This doesn't work.
            var i, song, lyrics = [];
            for (i = 0; i < songs.length; i++) {
                song = songs[i].lyrics;
                song = song.replace(
                    /\s(the|am|I|are|not|t|they|me|you|he|she|he|are|it|if|is|or|o|a|don|about|above|after|again|against|all|and|any|aren|as|act|herself|have|from|during|each|few|for|how|was|were|very|too|to|two|one|your|re|let|s|only|myself|other|ours|same|that|these|those|this|them|then|their|under|until|ve|why|us|an|in|on|do|up|my)\s/gi,
                    ' ');
                lyrics = lyrics.concat(song.split(' '));
            }
            return lyrics;
        };

        /**
         * [removeDuplicates description]
         * @param  {[type]} words [description]
         * @return {[type]}       [description]
         */
        removeDuplicates = function(words) {
            words = words.filter(function(item, pos) {
                return words.indexOf(item) == pos;
            });
            return words;
        };

        /**
         * [countFrequency description]
         * @param  {[type]} word   [description]
         * @param  {[type]} lyrics [description]
         * @return {[type]}        [description]
         */
        countFrequency = function(word, lyrics) {
            word = word.toLowerCase();
            lyrics = lyrics.toLowerCase();
            return (lyrics.split(word)
                .length - 1);
        };

        /**
         * [selectMostFrequents description]
         * @param  {[type]} words [description]
         * @param  {[type]} N     [description]
         * @return {[type]}       [description]
         */
        selectMostFrequents = function(words, N) {
            // TODO: Return the top N words, from the words array, which contains
            // counts and word: [{text: '', weight: int}, ...]
            // sort according to the weight
            var sortWordByWeight = words.slice(0);
            sortWordByWeight.sort(function(a, b) {
                return a.weight - b.weight;
            });

            words = sortWordByWeight.slice(-N);
            return words;
        };

        // Public API here
        return {
            extractWords: extractWords,
            countFrequency: countFrequency,
            selectMostFrequents: selectMostFrequents,

            /**
             * Returns the most frequent words given a list of papers
             * @param  int nbTopWords    The number of desired words
             * @param  ['', ] papers     A text list of papers
             * @return array[{
             *         text: '',
             *         weight: 0,
             *         link: '',
             * }, ]                      An array of words objects, ready for the WC.
             */
            getTopWords: function(nbTopWords, papers) {

            },
        };
    });
