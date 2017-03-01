angular.module('redzoneApp').service('teamService', function() {
    this.test = "serviceTest";
    this.menuItems = [{
        item: "Team"
    }, {
        item: "Twitch"
    }, {
        item: "Stats"
    }, {
        item: "Events"
    }]
    this.roster = [{
        name: "Russell Wright",
        gamerId: "Buckks",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/russell.jpg",
        twitchId: "FreeCodeCamp",
        format: "left",
        twitchImg: "./images/default.jpg"
    }, {
        name: "Jeff McGee",
        gamerId: "Oxy",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/jeff.jpg",
        twitchId: "Magoo216969",
        format: "right",
        twitchImg: "..images/magoo.jpeg"
    }, {
        name: "Kevin Lafountain",
        gamerId: "Mercy",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "..images/kevin.jpg",
        twitchId: "ESL_SC2",
        format: "left",
        twitchImg: "./images/default.jpg"
    }, {
        name: "Kyle McGallion",
        gamerId: "sides",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/kylem.jpg",
        twitchId: "Kylemcg09",
        format: "right",
        twitchImg: "./images/default.jpg"
    }, {
        name: "Cris Mirbach",
        gamerId: "ididid",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/cris.jpg",
        twitchId: "suburbluke",
        format: "right",
        twitchImg: "./images/default.jpg"
    }, {
        name: "Luke Jumper",
        gamerId: "backyardsluts9",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: "./images/luke.jpg",
        twitchId: "suburbluke",
        format: "right",
        twitchImg: "./images/default.jpg"
    }]
})
