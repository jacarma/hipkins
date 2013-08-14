'use strict';

angular.module('hipkinsApp')
  .factory('ct', function () {
    return {
      server: 'https://hudson.eclipse.org/hudson/',
      useJsonp: true
    };
  });
