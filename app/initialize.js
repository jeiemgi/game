var domready = require("domready");
var stage = require("js/modules/world.js");

var Game = {
    start: function() {
        stage.init();
    }
};

domready(function() {
    Game.start();
});