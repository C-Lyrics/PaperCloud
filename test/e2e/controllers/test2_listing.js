'use strict';

describe('Listing Page', function() {
    beforeEach(function() {
        var searchButton, searchInput, word;
        browser.get('http://localhost:9000/');
        browser.driver.sleep(3000);
        searchButton = browser.driver.findElement(by.id(
            'keyword-button'));
        searchInput = browser.driver.findElement(by.id(
            'keyword-search'));
        searchInput.sendKeys('quantum');
        searchButton.click();
        word = browser.driver.findElement(by.id(
            'cWordCloud_word_0'));
        browser.driver.sleep(3000);
        word.click();
        browser.driver.sleep(2000);

        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('should have a list of papers', function() {
        var list = browser.driver.findElement(by.id(
            'paper-list'))
        expect(!!list)
            .toBeTruthy();
    });

    it('should have a navigation button back to the word cloud',
        function() {
            var navbuttonWC = browser.driver.findElement(by.id(
                'navToWC-button'));
            expect(btn)
                .toBeTruthy();
            expect(btn.getAttribute('ng-href'))
                .toBe('#/');
        });

    it('should have a publisher', function() {
        var publisher = browser.driver.findElement(by.css(
            '.paper-publisher'));
        expect(publisher)
            .toBeTruthy();
    });

    it('should have a date', function() {
        var date = browser.driver.findElement(by.css(
            '.paper-date'));
        expect(date)
            .toBeTruthy();
    });

    it('should have a author', function() {
        var author = browser.driver.findElement(by.css(
            '.paper-author'));
        expect(author)
            .toBeTruthy();
    });

    it('should have a title', function() {
        var title = browser.driver.findElement(by.css(
            '.paper-title'));
        expect(title)
            .toBeTruthy();
    });

    it('should have a download button', function() {
        var dlBtn = browser.driver.findElement(by.css(
            '.download-link'));
        expect(dlBtn)
            .toBeTruthy();
    });

    it('should have clickable title words', function() {
        var words = browser.driver.findElement(by.css(
            '.paper-title[ng-href]'));
        expect(words)
            .toBeTruthy();
    });
});
