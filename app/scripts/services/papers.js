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
        extractWords = function(allpapers) {
            // TODO: This doesn't work.
            var i, researchpapers = [];
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
        removeDuplicates = function(words) {
            words = words.filter(function(item, pos) {
                return words.indexOf(item) === pos;
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
        countFrequency = function(word, researchpapers) {
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
        selectMostFrequents = function(words, N) {
            // Return the top N words, from the words array, which contains
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

            // TODO: Create more fake papers
            papersMockup: [{
                title: 'XP Practices',
                author: 'GJ Halfond',
                content: 'After reviewing the suggested XP practices, I have decided that it will be more fair for all groups if I assign the new practices rather than allow groups to choose their own.  The following will be the additional three practices for groups to follow for Iteration 2.',
                title: 'Green Eggs and Ham',
                author: 'Seb Arnold',
                content: '“Do you like green eggs and ham?” asks Sam-I-am in this Beginner Book by Dr. Seuss. In a house or with a mouse? In a boat or with a goat? On a train or in a tree? Sam keeps asking persistently. With unmistakable characters and signature rhymes, Dr. Seuss’s beloved favorite has cemented its place as a children’s classic. In this most famous of cumulative tales, the list of places to enjoy green eggs and ham, and friends to enjoy them with, gets longer and longer. Follow Sam-I-am as he insists that this unusual treat is indeed a delectable snack to be savored everywhere and in every way.',
                title: 'Scrum',
                author: 'Kelsey Fargas',
                content: 'What is Scrum? Scrum is a way for teams to work together to develop a product. Product development, using Scrum, occurs in small pieces, with each piece building upon previously created pieces. Building products one small piece at a time encourages creativity and enables teams to respond to feedback and change, to build exactly and only what is needed.',
                title: 'The Notebook',
                author: 'Mark Krant',
                content: 'In time, the hurt began to fade and it was easier to just let it go. At least I thought it was. But in every boy I met in the next few years, I found myself looking for you, and when the feelings got too strong, Id write you another letter. But I never sent them for fear of what I might find. By then, youd gone on with your life and I didnt want to think about you loving someone else. I wanted to remember us like we were that summer. I didnt ever want to lose that.',
                title: 'Extreme Programming',
                author: 'Justine Cocchi',
                content: 'Extreme programming (XP) is an agile software development methodology used to implement software projects. This article details the practices used in this methodology. Extreme programming has 12 practices, grouped into four areas, derived from the best practices of software engineering.',
                title: 'Agile Guiding Practices',
                author: 'Milad Gueramin',
                content: '1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software. 2. Welcome changing requirements, even late in development. Agile processes harness change for the customers competitive advantage.',
                title: 'Equivalence Partitioning',
                author: 'Jeff Kang',
                content: 'Basic idea: to identify groups of test cases that may reveal same types of errors (e.g., erroneous handling of all inputs > 100) Partitioning the input domain into groups from which to derive test cases (also called equivalence classes). A group is a set of data whose components are likely to be treated homogeneously by the program. Ideal case: all test cases in a group have the same outcome',
            }, ],

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
                // TODO: Replace and work with Server.prod and Papers.papersMockup
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
