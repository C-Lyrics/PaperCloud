'use strict';

describe('Listing Page', function() {
    beforeEach(function() {
        var searchButton, searchInput;
        browser.get('http://localhost:9000/');
        browser.driver.sleep(3000);
        searchButton = browser.driver.findElement(by.id(
            'keyword-button'));
        searchInput = browser.driver.findElement(by.id('keyword-search'));
        searchInput.sendKeys('quantum');
        searchButton.click()
            .then(function() {
                var word = browser.driver.findElement(by.id(
                    'cWordCloud_word_0'));
                word.click();
            });
        browser.driver.sleep(2000);

        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('should have a list of papers', function() {
        var list = browser.driver.findElement(by.id('paper-list'))
        expect(!!list)
            .toBeTruthy();
    });
});
