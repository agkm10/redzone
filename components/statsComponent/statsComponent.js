angular.module('redzoneApp').component('statsComponent', {
    templateUrl: "./components/statsComponent/statsComponent.html",
    bindings: {

    },
    controller: function(statsService) {
        this.list = [];
        this.text = '76561197967199246';
        this.submit = function() {
          this.list=[];
            if (this.text) {
                this.list.push({
                    steamId: this.text
                });
                this.text = '';
            }
            console.log(this.list)
            statsService.getSteamStats(this.list).then(function(result) {
            });
        };
    }

})
