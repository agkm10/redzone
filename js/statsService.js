angular.module('redzoneApp').service('statsService', function($http, $q){
  this.getSteamStats = function(teamServiceRoster) {
    var statsPromise = new Promise(function(resolve,reject) {
      var playerStats = [];



      var count = 0;
      teamServiceRoster.forEach(function(user, idx, arr){
        var key = '7742AC34C80E873719E156F8FD8930C3'
        var url = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key='
        var id = user.steamId
        var steamUrl = url+key+'&steamid='+id
        $http({
          method: "GET",
          url:steamUrl
        }).then(function(result){
          
          if(result.data.playerstats.stats){
          arr[idx].statkills = result.data.playerstats.stats[0].value
          arr[idx].statdeaths= result.data.playerstats.stats[1].value
          arr[idx].statehours = Math.floor(result.data.playerstats.stats[2].value/3600)
        } else {
          arr[idx].statkills = 0
          arr[idx].statdeaths= 0
          arr[idx].statehours = 0
        }
          count+=1;
          if (count === arr.length) {
            resolve(arr)
          }

        })
      })

    })
    return statsPromise;
  }
})
