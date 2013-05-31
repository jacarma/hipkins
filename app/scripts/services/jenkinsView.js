/*jshint indent:4 */
'use strict';

angular.module('testYoApp')
    .factory('jenkinsView', function($resource) {
    return $resource('http://ci.jruby.org/view/:id/api/json', {
        depth: 2,
        pretty: true
    });
});