'use strict';

describe('Application Homepage', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000');
        browser.driver.sleep(3000);
        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('should have a gray background', function() {
        expect(browser.driver.findElement(by.css('body'))
            .getCssValue('background-color'))
            .toBe('rgba(211, 211, 211, 1)');
    });
});
