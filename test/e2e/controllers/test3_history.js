'use strict';

describe('History page', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000');
        browser.driver.sleep(3000);
        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('should', function() {
        expect(true)
            .toBe(true);
    });
});
