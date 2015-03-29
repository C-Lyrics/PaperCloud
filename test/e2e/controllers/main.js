'use strict';

describe('Application Homepage', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000');
        browser.driver.sleep(3000);
        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('the title should be PaperCloud', function() {
        var appName = browser.driver.findElement(by.css('h3.text-muted'));
        expect(appName.getText())
            .toEqual('PaperCloud');
    });

    it('should have a keyword search bar', function() {
        var searchKeyword = browser.driver.findElement(by.css(
            '#keyword-search'));
        expect(searchKeyword)
            .toBeTruthy();
    });

    it('should have a name search bar', function() {
        var searchName = browser.driver.findElement(by.css(
            '#name-search'));
        expect(searchName)
            .toBeTruthy();
    });
});
