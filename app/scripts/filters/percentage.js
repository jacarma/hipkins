'use strict';

angular.module('testYoApp')
  .filter('percentage', function () {
    return function (input) {
      return (input * 100);
    };
  });
