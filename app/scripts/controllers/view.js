'use strict';

angular.module('testYoApp')
  .controller('ViewCtrl', function ($scope, jenkinsView, $routeParams) {
        $scope.jenkinsData = jenkinsView.get({id: $routeParams.id});

        $scope.getOkPercentage = function(job) {
            var numBuilds = job.builds.length;
            var okJobs = 0;

            for(var i=0; i<numBuilds; i++) {
                var build = job.builds[i];
                if(build.result === "SUCCESS") {
                    okJobs++;
                }
            }
            return okJobs / numBuilds;
        }
    });
