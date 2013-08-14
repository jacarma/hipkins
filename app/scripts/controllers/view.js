/*jshint indent:4 */
'use strict';

angular.module('hipkinsApp')
    .controller('ViewCtrl', function($scope, jenkinsApi, $routeParams) {
        $scope.jenkinsData = jenkinsApi.view.get({
            id: $routeParams.id
        });

        $scope.getOkPercentage = function(job) {
            var numBuilds = job.builds.length;
            var okJobs = 0;

            for (var i = 0; i < numBuilds; i++) {
                var build = job.builds[i];
                if (build.result === 'SUCCESS') {
                    okJobs++;
                }
            }
            return okJobs / numBuilds;
        };
    });