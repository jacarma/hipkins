/*jshint indent:4 */
'use strict';

angular.module('hipkinsApp')
    .directive('knob', function () {
        return {
            link: function(scope, element){
                window.setTimeout(function(){ element.knob(); }, 100);
            }
        };
    });
