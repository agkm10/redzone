angular.module('redzoneApp').controller('teamCtrl', function($scope, teamService){
  $scope.test = teamService.test;
  $scope.roster = teamService.roster;
console.log($scope.roster)
$scope.menuItems = teamService.menuItems;
$scope.myVar = false;
})
