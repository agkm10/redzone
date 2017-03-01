angular.module('redzoneApp').controller('twitchCtrl', function($scope, twitchService, teamService){
  twitchService.getTwitchInfo(teamService.roster).then(function(result) {

         $scope.twitchInfo = teamService.roster;
         console.log($scope.twitchInfo)
          console.log("teamService.roster2",teamService.roster)
         $scope.$digest($scope.twitchInfo)
         $(".progress").hide(1000);
    });
  
})
