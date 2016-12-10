var moves = {
	events: function(){
		$("body").keydown(function(e){
		  if(charX < 90 ){
		  	charX = 90;
		  	return;
		  }
		  else if(charX > 1330){
		  	charX = 1330;
		  	return;
		  }
		  else if(charY == 450){
		  	return;
		  }
		  else if(e.keyCode == 38) { // left
			charY -= 80;
			redraw();
		  }
		  else if(e.keyCode == 37) { // left
			charX -= 40;
			redraw();
		  }
		  else if(e.keyCode == 39) { // right
			charX += 40;
			redraw();
		  }
		});
		$("body").keyup(function(e) {
		  if(charX < 90 ){
		  	charX = 90;
		  	return;
		  }if(charX > 1330){
		  	charX = 1330;
		  	return;
		  }
		  if(e.keyCode == 38) { // left
			charY = 750;
			redraw();
		  }
		});

	}
}
module.exports = moves;