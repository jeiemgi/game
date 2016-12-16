import Bullet from "js/modules/Bullet"

export default class Player {
    constructor(bulletController) {
        this.bulletController = bulletController;
        this.posX = 0;
        this.posY = 420;
        this.charW = 160;
        this.charH = 200;
        this.ctx = null;
        this.img = new Image();
    };

    init() {
        this.actions();
    };
    render(ctx, x) {
        this.ctx = ctx;
        this.draw()
    }
    renderMove() {
        this.draw()
        this.posX += 1;
    }
    actions() {
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }
    jump() {
        // this.draw(this.posY -= 80);
    };
    moveFw() {
        this.draw();
        this.posX -= 10;
    };
    moveBack() {
        for (var i = 0; i < 80; i++) {
            this.renderMove(this.ctx)
        }
    };
    draw(x) {
        this.ctx.drawImage(this.img, this.posX, this.posY, this.charW, this.charH);
        this.img.src = "../img/hero.png";

    };
    onKeyDown = (e) => {
        let keyCode = e.keyCode;
        switch (keyCode) {
            case 32:
                /* Space Bar */
                this.bulletController.add(this.posX + 155, this.posY + 126)
                break;
            case 37:
                /* Arrow Left */
                if (this.posX == 0)
                    return;
                this.moveFw();
                break;
            case 38:
                /* Arrow Up */
                if (this.posY == 340)
                    return;
                this.jump();
                break;
            case 39:
                /* Arrow Right */
                if (this.posX == 800)
                    return;
                if (this.posX >= 320) {
                    console.log("follow");
                }
                this.moveBack();
                break;
        }
    }

    onKeyUp = (e) => {
        if (e.keyCode == 38) { // jump
            this.posY = 420;
        }
    }

};