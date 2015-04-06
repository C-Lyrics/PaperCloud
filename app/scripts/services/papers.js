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
         * @param  {[type]} researchpapers [description]
         * @return {[type]}       [description]
         */
        var extractWords = function(allpapers) {
            // TODO: This doesn't work.
            //function should extract the stop words from going on the paper cloud
            var i, allpapers, researchpapers = [];
            for (i = 0; i < allpapers.length; i++) {
                allpapers = allpapers[i].lyrics;
                allpapers = allpapers.replace(
                    /\s(the|am|I|are|not|t|they|me|you|he|she|he|are|it|if|is|or|o|a|don|about|above|after|again|against|all|and|any|aren|as|act|herself|have|from|during|each|few|for|how|was|were|very|too|to|two|one|your|re|let|s|only|myself|other|ours|same|that|these|those|this|them|then|their|under|until|ve|why|us|an|in|on|do|up|my)\s/gi,
                    ' ');
                researchpapers = researchpapers.concat(allpapers.split(' '));
            }
            return researchpapers;
        };

        /**
         * [removeDuplicates description]
         * @param  {[type]} words [description]
         * @return {[type]}       [description]
         */
        var removeDuplicates = function(words) {
            //function should remove any duplicates it finds to prevent it from going on the paper cloud
            //return the set of words that don't have the duplicates
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
        var countFrequency = function(word, researchpapers) {
            //should return a count on how many times a word occurs in all papers from a given search
            word = word.toLowerCase();
            researchpapers = researchpapers.toLowerCase();
            return (researchpapers.split(word)
                .length - 1);
        };

        /**
         * [selectMostFrequents description]
         * @param  {[type]} words [description]
         * @param  {[type]} N     [description]
         * @return {[type]}       [description]
         */
        var selectMostFrequents = function(words, N) {
            // TODO: Return the top N words, from the words array, which contains
            // counts and word: [{text: '', weight: int}, ...]
            // sort according to the weight
            var sortWordByWeight = words.slice(0);
            sortWordByWeight.sort(function(a, b) {
                return a.weight - b.weight;
            });

            words = sortWordByWeight.slice(-N);
            //selects the last N amount of words from the list (pulling from the end of the list)
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
            getTopWords: function(nbTopWords, allpapers) {
                var words;
                allpapers = allpapers.join(' '); //joins all elements of an array into one string
                words = allpapers.split(' '); // splits a string into an array of substrings 
                words = removeDuplicates(words); //remove the duplicates in the array
                words = words.map(function(curr, idx) { 
                //words will now be an obj that has text, weight, and link
                    return {
                        text: curr,
                        weight: countFrequency(curr, allpapers),
                        link: ''
                    };
                });
                return selectMostFrequents(words, nbTopWords);

            },
        };
    });
