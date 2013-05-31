'use strict';

angular.module('testYoApp')
  .controller('MainCtrl', function ($scope, jenkins) {
        $scope.jenkinsData = jenkins.get();

        $scope.getOkPercentage = function(view) {
            var numJobs = view.jobs.length;
            var okJobs = 0;

            for(var i=0; i<numJobs; i++) {
                var job = view.jobs[i];
                if(job.color === "blue") {
                    okJobs++;
                }
            }
            return okJobs / numJobs;
        }
  });
