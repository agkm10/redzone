angular.module('redzoneApp').service('twitchService', function($http, $q) {
    this.getTwitchInfo = function(teamServiceRoster) {
        var twitchPromise = new Promise(function(resolve, reject) {
            var twitchApi = [];
            teamServiceRoster.forEach(function(user, idx, arr) {
                $http({
                    method: 'GET',
                    url: 'https://wind-bow.gomix.me/twitch-api/streams/' + user.twitchId
                }).then(function(result) {
                    arr[idx].stream = result.data
                    if (result.data.stream === null) {
                        arr[idx].stream.status = "This user is currently offline."
                    } else {
                        arr[idx].stream.status = result.data.stream.channel.status
                    }
                    twitchApi.push(result.data)
                    if (twitchApi.length === teamServiceRoster.length) {
                        resolve(twitchApi)
                    }
                })
            })
        })
        return twitchPromise;
    }
})
