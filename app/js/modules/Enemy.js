export default class EmenyA {
    constructor(controller, x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.enemyW = 140;
        this.enemyH = 220;
        this.frames = 0;
        this.direction = "up";
        this.img = new Image();
        if (this.type == 2) {
            this.imgSrc = "../img/zombie-2.png";
        } else {
            this.imgSrc = "../img/zombie.png";
        }
        this.img.src = this.imgSrc;
        
    };
    render(ctx) {
        this.draw(ctx, this.x, this.y);
        if (this.type == 1) {
            this.x -= 1;
        } else {
            this.moveY();
        }
        if (this.x > this.charPosX + 700) {
            this.controller.remove(this);
        }
    }
    moveY() {
        if (this.frames < 20     && this.direction == "up") {
            this.y+=10;
            this.frames++;
            if (this.frames == 20   ) {
                this.direction = "down";
            }
        } else if (this.frames <= 50 && this.direction == "down") {
            this.y-=10;
            this.frames--;
            if (this.frames ==  -20) {
                this.direction = "up";
            }
        }
    }
    moveFw() {
        this.x += 80;
    };
    draw(ctx, x, y) {
        ctx.drawImage(this.img, x, y, this.enemyW, this.enemyH);
    };

};