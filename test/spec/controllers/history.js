'use strict';

describe('Controller: HistoryCtrl', function() {

    // load the controller's module
    beforeEach(module('frontendApp'));

    var HistoryCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        HistoryCtrl = $controller('HistoryCtrl', {
            $scope: scope
        });
    }));
});
