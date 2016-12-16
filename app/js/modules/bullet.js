import World from "js/modules/World"

export default class Bullet {

    constructor(controller, x, y, charPosX) {
        this.x = x;
        this.y = y;
        this.charPosX = charPosX;
        this.controller = controller;
        this.punch = new Audio('../sounds/punch.mp3');
    }
    collide() {
        this.punch.play();
    }
    render(ctx) {
        this.draw(ctx, this.x, this.y);
        this.x += 5;
        if (this.x > this.charPosX + 700) {
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