'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('frontendApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    describe('Application Homepage', function() {
        it('should display the application name', function() {
            browser.get('http://localhost:9000');

            var appName = element(by.css('h3.text-muted')); //using the CSS selector

            expect(appName.getText())
                .toEqual('PaperCloud');
        });

    });

});
