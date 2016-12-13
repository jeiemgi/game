var player = require("js/modules/player");
var World = {
    myCanvas: null,
    ctx: null,
    init: function(){
    	World.myCanvas = document.getElementById('myCanvas');
    	World.ctx = World.myCanvas.getContext("2d");
    	player.init();
    	World.render();
    },
    render: function() {
        requestAnimationFrame(World.render);
        player.draw(World.ctx);
    }
    // render: function(){
    // 	Game.players[i].render();
    // }
}
module.exports = World;