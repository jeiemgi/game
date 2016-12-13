var moves = {
    keys: function(Player) {
        $("body").keydown(function(e) {
            // Forward or Backward
            if (e.keyCode == 32 /* SPACE */ ) {
                Player.hero.shoot();
            }
            if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 ) {
                if (e.keyCode == 37 && Player.charX == 0) {
                    return;
                }
                if (e.keyCode == 38 && Player.charY == 340) {
                    return;
                }
                if (e.keyCode == 39 && Player.charX == 800) {
                    return;
                } else if (e.keyCode == 37) { /* Arrow right */ 
                    Player.hero.moveFw();
                    console.log('left');
                } else if (e.keyCode == 38) { /* Arrow up */ 
                    Player.hero.jump();
                    console.log('up');
                } else { // Backward					
                    Player.hero.moveBack();
                    console.log('right');
                }
            }

        });

        $("body").keyup(function(e) {
            if (e.keyCode == 38) { // jump
                Player.charY = 420;
            }
        });
    },
}

module.exports = moves;