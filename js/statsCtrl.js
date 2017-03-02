angular.module('redzoneApp').controller('statsCtrl', function($scope, statsService, teamService){
$scope.teamRoster = teamService.roster
    statsService.getSteamStats($scope.teamRoster).then(function(result) {
          $scope.teamMembers = result
          console.log($scope.teamMembers)
          $scope.$digest()
          $('.collapsible').collapsible();
  });
})
