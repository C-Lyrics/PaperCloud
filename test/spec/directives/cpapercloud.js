'use strict';

describe('Directive: cPaperCloud', function () {

  // load the directive's module
  beforeEach(module('frontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<c-paper-cloud></c-paper-cloud>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cPaperCloud directive');
  }));
});
