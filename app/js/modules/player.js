var moves = require("js/modules/movements.js");
var Player = {

    charX: 0,
    charY: 420,
    charW: 160,
    charH: 200,
    img: new Image(),
    shoots: [],

    init: function(){
      Player.addEvents();
    },
    
    addEvents: function(){
      moves.keys(this);
    },
    
    hero: {
        jump: function() {
            Player.charY -= 80;
        },
        moveFw: function() {
            Player.charX -= 80;
        },
        moveBack: function() {
            Player.charX += 80;
        },
        shoot: function() {
            var x = Player.charX + 155;
            var y = Player.charY + 127;
            bullet.move(player, level.ctx, x++, y);
        }
    },

    draw: function(ctx) {
        var x = Player.charX;
        var y = Player.charY;
        console.log("x: " + x + " y: " + y);
        ctx.clearRect(0,0,960,800);
        ctx.drawImage(Player.img, x, y, Player.charW, Player.charH);
        Player.img.onload = function() {
            ctx.drawImage(Player.img, Player.hero.charX, Player.hero.charY, Player.hero.charW, Player.hero.charH);
        };
        Player.img.src = "../img/hero.png";
    },

    bullet: {
        draw: function(player, ctx, x, y) {
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
        },
        move: function() {
            bullet.draw();
        }
    }

    // render: function() {
  
    //     // //tiros
    //     // for (var i = 0; i < player.shoots.length; i++) {
    //     //     player.shoots[i].draw(player, ctx, x, y);
    //     // }
    // },


};




module.exports = Player;