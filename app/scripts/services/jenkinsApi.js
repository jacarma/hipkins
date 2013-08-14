/*jshint indent:4 */
'use strict';

angular.module('hipkinsApp')
    .factory('jenkinsApi', function($resource, ct) {
        function jenkinsResource(url) {
            var params = {
                depth: 1,
                pretty: true
            };
            var methods = {};
            if (ct.useJsonp) {
                params.jsonp = 'JSON_CALLBACK';
                methods.get = {
                    method: 'JSONP'
                };
            }
            return $resource(ct.server + url, params, methods);
        }
        return {
            dashboard: jenkinsResource('api/json'),
            view: jenkinsResource('view/:id/api/json')
        };
    });