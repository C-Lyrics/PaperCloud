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

    it('should generate a wordcloud if a search has already been done.',
        function() {
            var PapersService;
            beforeEach(inject(function(_Papers_) {
                PapersService = _Papers_;
            }));
        });

});
