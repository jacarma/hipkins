'use strict';

describe('Service: jenkinsApi', function () {

  // load the service's module
  beforeEach(module('hipkinsApp'));

  // instantiate service
  var jenkinsApi;
  beforeEach(inject(function (_jenkinsApi_) {
    jenkinsApi = _jenkinsApi_;
  }));

  it('should do something', function () {
    expect(!!jenkinsApi).toBe(true);
  });

});
