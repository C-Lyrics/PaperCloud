'use strict';

describe('Service: Keyword', function() {

    // load the service's module
    beforeEach(module('frontendApp'));

    // instantiate service
    var Keyword;
    beforeEach(inject(function(_Keyword_) {
        Keyword = _Keyword_;
    }));

    it('should do something', function() {
        expect(!!Keyword)
            .toBe(true);
        expect(typeof Keyword.getPapers)
            .toEqual('function');
    });

});
