var domready = require("domready");

loadCharacter = function(){
	var personaje = require("js/modules/personaje");
}

moveCharacter = function(){
	var movements = require("js/modules/movements.js");
	movements.events();
}
startGame = function(){
	loadCharacter();
	moveCharacter();
}

domready(function(){
	startGame();
});

