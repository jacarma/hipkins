/*jshint indent:4 */
'use strict';

angular.module('hipkinsApp')
    .controller('MainCtrl', function($scope, jenkinsApi) {
        $scope.jenkinsData = jenkinsApi.dashboard.get();

        $scope.getOkPercentage = function(view) {
            var numJobs = view.jobs.length;
            var okJobs = 0;

            for (var i = 0; i < numJobs; i++) {
                var job = view.jobs[i];
                if (job.color === 'blue') {
                    okJobs++;
                }
            }
            return okJobs / numJobs;
        };
    });