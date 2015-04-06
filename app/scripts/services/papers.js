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
         * @param  {[var]} allpapers [function should extract the stop words from going on the paper cloud]
         * @return {[var]} researchpapers [function will return all of the research papers without stop words ]
         */
        var extractWords = function(allpapers) {
            // TODO: This doesn't work.
            var i, allpapers, researchpapers = [];
            for (i = 0; i < allpapers.length; i++) {
                allpapers = allpapers[i].lyrics;
                allpapers = allpapers.replace(
                    /\s(the|am|I|are|not|t|they|me|you|he|she|he|are|it|if|is|or|o|a|don|about|above|after|again|against|all|and|any|aren|as|act|herself|have|from|during|each|few|for|how|was|were|very|too|to|two|one|your|re|let|s|only|myself|other|ours|same|that|these|those|this|them|then|their|under|until|ve|why|us|an|in|on|do|up|my)\s/gi,
                    ' ');
                researchpapers = researchpapers.concat(allpapers.split(
                    ' '));
            }
            return researchpapers;
        };

        /**
         * [removeDuplicates description]
         * @param  {[var]} words [function should remove any duplicates it finds to prevent it from going on the paper cloud]
         * @return {[var]} words [return the set of words that don't have the duplicates]
         */
        var removeDuplicates = function(words) {
            words = words.filter(function(item, pos) {
                return words.indexOf(item) == pos;
            });
            return words;
        };

        /**
         * [countFrequency description]
         * @param  {[var]} word   [function will take in the search word and find in the other param
                                    "researchpapers" to count them ]
         * @param  {[var]} researchpapers [this parameter will use the search term "words" to search
                                    through all research papers and find the term and count them ]
         * @return {[var]} number [should return a count on how many times a word occurs in all papers from a given search]
         */
        var countFrequency = function(word, researchpapers) {
            word = word.toLowerCase();
            researchpapers = researchpapers.toLowerCase();
            return (researchpapers.split(word)
                .length - 1);
        };

        /**
         * sorts the "words" in order of frequency.
         * @param  [{text:'', weight: 0}] words     A list of words
         * @param  int N     number of words to be returned for word cloud
         * @return [{text: '', weight: 0}] words return the top N words from the words array
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
                // return selectMostFrequents(words, nbTopWords);

                /****** For testing purposes *****************/
                return [{
                    text: 'asdf',
                    weight: 1,
                    link: '',
                }, {
                    text: 'asdfasdf',
                    weight: 2,
                    link: '',
                }, {
                    text: 'asdflkj',
                    weight: 3,
                    link: '',
                }, {
                    text: 'asdfoi',
                    weight: 4,
                    link: '',
                }, {
                    text: 'lkjasdf',
                    weight: 5,
                    link: '',
                }, {
                    text: 'asc',
                    weight: 6,
                    link: '',
                }, {
                    text: 'asc',
                    weight: 7,
                    link: '',
                }, {
                    text: 'oiuhokjl',
                    weight: 8,
                    link: '',
                }, ];

            },
        };
    });
