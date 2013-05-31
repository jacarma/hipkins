'use strict';

describe('Service: jenkinsView', function () {

  // load the service's module
  beforeEach(module('testYoApp'));

  // instantiate service
  var jenkinsView;
  beforeEach(inject(function (_jenkinsView_) {
    jenkinsView = _jenkinsView_;
  }));

  it('should do something', function () {
    expect(!!jenkinsView).toBe(true);
  });

});
