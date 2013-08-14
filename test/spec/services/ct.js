'use strict';

describe('Service: ct', function () {

  // load the service's module
  beforeEach(module('hipkinsApp'));

  // instantiate service
  var ct;
  beforeEach(inject(function (_ct_) {
    ct = _ct_;
  }));

  it('should do something', function () {
    expect(!!ct).toBe(true);
  });

});
