'use strict';

describe('Application Homepage', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000');
        browser.driver.sleep(3000);
        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('the title should be PaperCloud', function() {
        var appName = browser.driver.findElement(by.css('body'));
        expect(appName.getText())
            .toEqual('PaperCloud');
    });

    it('', function() {

    });
});
