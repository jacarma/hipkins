'use strict';

angular.module('testYoApp')
  .directive('knob', function () {
        return {
            link: function(scope, element, attrs, controller){
                window.setTimeout(function(){ element.knob(); }, 100);
            }
        };
  });
