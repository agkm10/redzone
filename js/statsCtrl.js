angular.module('redzoneApp').controller('statsCtrl', function($scope, statsService, teamService){
   $(document).ready(function(){
  $('.collapsible').collapsible();
  $scope.teamRoster = teamService.roster
});

})
