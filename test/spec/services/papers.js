'use strict';

describe('Service: Papers', function() {

    // load the service's module
    beforeEach(module('frontendApp'));

    // instantiate service
    var Papers;
    beforeEach(inject(function(_Papers_) {
        Papers = _Papers_;
    }));

    it('should do something', function() {
        expect(!!Papers)
            .toBe(true);
    });

    it('should return the expected number of best words', function() {
        var top = 3,
            papers = [
                'éalskd fjaésldkfj asdéfklj asdfélkasjd féalskdf',
                'éalskd fjaésldkfj asdéfklj asdfélkasjd féalskdf',
                'éalskd fjaésldkfj asdéfklj asdfélkasjd féalskdf',
                'éalskd fjaésldkfj asdéfklj asdfélkasjd féalskdf',
                'éalskd fjaésldkfj asdéfklj asdfélkasjd féalskdf',
                'éalskd fjaésldkfj asdéfklj asdfélkasjd féalskdf',
            ];
        var words = Papers.getTopWords(top, words);
        expect(words.length)
            .toEqual(top);
    });

    it('should test countFrequency function', function() {
        var word1 = 'jaYz';
        var lyrics1 =
            'I hopped off the plane at L.A.X. With a dream and my cardigan Welcome to the land of fame excess (whoa), Am I gonna fit in? Jumped in the cab, Here I am for the first time Look to my right and I see the Hollywood sign This is all so crazy Everybody seems so famous My tummys turnin and Im feelin kinda home sick Too much pressure and Im nervous, Thats when the taxi man turned on the radio And a JayZ song was on And a JayZ song was on And a JayZ song was on';
        var wordcount = Papers.countFrequency(word1, lyrics1);
        expect(wordcount)
            .toEqual(3);

        var word2 = 'ALl';
        var lyrics2 =
            'ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU';
        var wordcount2 = Papers.countFrequency(word2, lyrics2);
        expect(wordcount2)
            .toEqual(11);
    });

    it('should test the selectMostFrequents function', function() {
        //in the function, will take the the top 4 words that are sorted based on frequency
        var words = [{
            text: 'Kelsey',
            weight: 100
        }, {
            text: 'is',
            weight: 700
        }, {
            text: 'the',
            weight: 90
        }, {
            text: 'best',
            weight: 800
        }, {
            text: 'ever',
            weight: 120
        }];
        var frequentwords = Papers.selectMostFrequents(words, 4);
        //expect 'the' not to be in the list
        expect(frequentwords.length)
            .toEqual(4);

        expect(frequentwords)
            .toEqual([{
                text: 'Kelsey',
                weight: 100,
            }, {
                text: 'ever',
                weight: 120,
            }, {
                text: 'is',
                weight: 700,
            }, {
                text: 'best',
                weight: 800,
            }, ]);
    });

});
