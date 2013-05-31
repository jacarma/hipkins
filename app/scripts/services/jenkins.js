/*jshint indent:4 */
'use strict';

angular.module('testYoApp')
    .factory('jenkins', function($resource) {
    return $resource('http://ci.jruby.org/api/json', {
        depth: 1,
        pretty: true
    });
});