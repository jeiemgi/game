import World from "js/modules/World"

export default class Bullet {

    constructor(controller, x, y) {
        this.x = x;
        this.y = y;
        this.controller = controller;
    }

    render(ctx) {
        this.draw(ctx, this.x, this.y);
        this.x += 10;
        if(this.x > 960){
        	this.controller.remove(this);
        }
    }

    draw(ctx, x, y) {
    	ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
    };
};