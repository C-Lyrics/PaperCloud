'use strict';

describe('Service: Researcher', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Researcher;
  beforeEach(inject(function (_Researcher_) {
    Researcher = _Researcher_;
  }));

  it('should do something', function () {
    expect(!!Researcher).toBe(true);
  });

});
