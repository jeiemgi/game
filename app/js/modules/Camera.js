export default class Camera{
	constructor(character) {
		this.character = character;
	}
	follow(direction){
		if(direction === "right")
			this.character.ctx.translate(-80,0);
		else
			this.character.ctx.translate(80,0);
	}
}

