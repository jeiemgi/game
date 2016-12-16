var domready = require("domready");
import World from "js/modules/World";

export default class Game{
    constructor() {
        this.s1 = new World();
    }
    start() {
        this.s1.init();
    }
};

domready(function() {
    let game = new Game();
    $("#battle").on("click", function(){
    game.start();
    })
});