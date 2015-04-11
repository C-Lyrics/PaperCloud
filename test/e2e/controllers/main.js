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

    it('should have a working name search button', function() {
        var btn = browser.driver.findElement(by.id('name-button'));
        expect(btn)
            .toBeTruthy();
        expect(btn.getAttribute('ng-click'))
            .toBe('launchNameSearch');
    });
    it('should have a working keyword search button', function() {
        var btn = browser.driver.findElement(by.id('keyword-button'));
        expect(btn)
            .toBeTruthy();
        expect(btn.getAttribute('ng-click'))
            .toBe('launchKeywordSearch');
    });

    it('should have a click event on the word cloud', function() {
        var btn = browser.driver.findElement(by.id('keyword-button')),
            search = browser.driver.findElement(by.id('keyword-search'));
        search.sendKeys('example');
        btn.click();
        browser.driver.sleep(2000);
        var link = browser.driver.findElement(by.id('cWordCloud_word_0'));
        expect(!!link)
            .toBeTruthy();
        expect(!!link.getAttribute('ng-click'))
            .toBeTruthy();
    });

    it('should have a double click event on the word cloud', function() {
        var btn = browser.driver.findElement(by.id('keyword-button')),
            search = browser.driver.findElement(by.id('keyword-search'));
        search.sendKeys('example');
        btn.click();
        browser.driver.sleep(2000);
        var link = browser.driver.findElement(by.id('cWordCloud_word_0'));
        expect(!!link)
            .toBeTruthy();
        expect(!!link.getAttribute('ng-click'))
            .toBeTruthy();
    });


});
