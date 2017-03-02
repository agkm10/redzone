angular.module('redzoneApp').service('teamService', function() {
    this.test = "serviceTest";
    this.menuItems = [{
        item: "Team"
    }, {
        item: "Twitch"
    }, {
        item: "Stats"
    }, {
        item: "Matches"
    }]
    this.roster = [{
        name: "Russell Wright",
        gamerId: "Buckks",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/russell.jpg",
        twitchId: "FreeCodeCamp",
        format: "left",
        twitchImg: "./images/default.jpg",
        steamId: "76561197967199246"
    }, {
        name: "Jeff McGee",
        gamerId: "Oxy",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/jeff.jpg",
        twitchId: "magoo216969",
        format: "right",
        twitchImg: "./images/magoo.jpeg",
        steamId: "76561197975621049"
    }, {
        name: "Kevin Lafountain",
        gamerId: "Mercy",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/kevin.jpg",
        twitchId: "agkm10",
        format: "left",
        twitchImg: "./images/default.jpg",
        steamId: "76561197983586846"
    }
    // , {
    //     name: "Kyle McGallion",
    //     gamerId: "sides",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    //     image: "./images/kylem.jpg",
    //     twitchId: "Kylemcg09",
    //     format: "right",
    //     twitchImg: "./images/default.jpg",
    //     steamId: "76561198052022893"
    // }
    , {
        name: "Cris Mirbach",
        gamerId: "ididid",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/cris.jpg",
        twitchId: "suburbluke",
        format: "right",
        twitchImg: "./images/default.jpg",
        steamId: "76561198036034415"
    }
    , {
        name: "Kurt McGallion",
        gamerId: "zenhar",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/kurt.jpg",
        twitchId: "agkm10",
        format: "right",
        twitchImg: "./images/default.jpg",
        steamId: "76561198146246917"
    }
    // , {
    //     name: "Luke Jumper",
    //     gamerId: "backyardsluts9",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    //     image: "./images/luke.jpg",
    //     twitchId: "Suburbluke",
    //     format: "right",
    //     twitchImg: "./images/default.jpg",
    //     steamId: "76561198044104859"
    // }
  ]
})
