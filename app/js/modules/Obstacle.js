export default class Obstacle {
    constructor(controller, x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.obstacleW = 300;
        this.obstacleH = 220;
        this.frames = 0;
        this.controller = controller;
        this.direction = "up";
        this.img = new Image();
        if (this.type == "2") {
            this.imgSrc = "img/rock.png";
        } else {
            this.imgSrc = "img/table.png";
        }
        this.img.src = this.imgSrc;
    };
    render(ctx) {
        this.draw(ctx, this.x, this.y);

        if (this.type == 1) {
            // this.x -= 1;
        } else {
            // this.moveY();
        }
        if (this.x > this.charPosX + 700) {
            this.controller.remove(this);
        }
    }
    draw(ctx, x, y) {
        ctx.drawImage(this.img, x, y, this.obstacleW, this.obstacleH);

    };
    moveY() {
        if (this.frames < 50 && this.direction == "up") {
            this.y += 10;
            this.frames++;
            if (this.frames == 50) {
                this.direction = "down";
            }
        } else if (this.frames <= 50 && this.direction == "down") {
            this.y -= 10;
            this.frames--;
            if (this.frames == 0) {
                this.direction = "up";
            }
        }
    }


};