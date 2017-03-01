angular.module('redzoneApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('Team', {
                url: '/',
                templateUrl: "../views/team.html",
                controller: 'teamCtrl'
            })
            .state('Twitch', {
                url: '/twitch',
                templateUrl: "../views/twitch.html",
                controller: "twitchCtrl"
            })
            .state('Stats', {
                url: '/stats',
                templateUrl: "../views/stats.html",
                controller: 'statsCtrl'
            })
            .state('Events', {
                url: '/events',
                templateUrl: "../views/events.html",
                controller: "eventsCtrl"
            })


        $urlRouterProvider
            .otherwise('/');
    });
