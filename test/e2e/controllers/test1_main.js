'use strict';

describe('Application Homepage', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000');
        browser.driver.sleep(3000);
        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('the title should be PaperCloud', function() {
        var appName = browser.driver.findElement(by.css(
            'h3.text-muted'));
        expect(appName.getText())
            .toEqual('PaperCloud');
    });

    it('should not have a dash at the top of the page', function() {
        var dash = browser.driver.findElement(by.css(
            'div.header'));
        expect(dash)
            .toBeTruthy();
    });

    it('should have a keyword search bar', function() {
        var searchKeyword = browser.driver.findElement(by.css(
            '#keyword-search'));
        expect(searchKeyword)
            .toBeTruthy();
    });

    it('should not have a home button.', function() {
        var homeButton = browser.driver.findElement(by.css(
            '#home-nav'));
        expect(!!homeButton)
            .toBe(false);
    });

    it('should have a name search bar', function() {
        var searchName = browser.driver.findElement(by.css(
            '#name-search'));
        expect(searchName)
            .toBeTruthy();
    });

    it('should have a progress bar', function() {
        var progressBar = browser.driver.findElement(by.css(
            '#progress'));
        expect(progressBar)
            .toBeTruthy();
    });

    it('should have a working name search button', function() {
        var btn = browser.driver.findElement(by.id(
            'name-button'));
        expect(btn)
            .toBeTruthy();
        expect(btn.getAttribute('ng-click'))
            .toBe('launchNameSearch');
    });

    it('should have a working keyword search button', function() {
        var btn = browser.driver.findElement(by.id(
            'keyword-button'));
        expect(btn)
            .toBeTruthy();
        expect(btn.getAttribute('ng-click'))
            .toBe('launchKeywordSearch');
    });

    it('should have a click event on the word cloud', function() {
        var btn = browser.driver.findElement(by.id(
                'keyword-button')),
            search = browser.driver.findElement(by.id(
                'keyword-search'));
        search.sendKeys('example');
        btn.click();
        browser.driver.sleep(2000);
        var link = browser.driver.findElement(by.id(
            'cWordCloud_word_0'));
        expect(!!link)
            .toBeTruthy();
        expect(!!link.onclick)
            .toBeTruthy();
    });

    it(
        'should have a launchNameSearch get the good name if no phrase. (FIX)',
        function() {
            var nameSearch = browser.driver.findElement(by.css('name-search')),
                searchBtn = browser.driver.findElement(by.css('name-button')),
                wordcloud;
            nameSearch.sendKeys('example');
            searchBtn.click();
            wordcloud = browser.driver.findElement(by.css('#cWordCloud_word_0'));
            expect(wordcloud).toBeTruthy();
        });
});
