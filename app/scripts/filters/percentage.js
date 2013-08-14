'use strict';

angular.module('hipkinsApp')
  .filter('percentage', function () {
    return function (input) {
      return (input * 100);
    };
  });
