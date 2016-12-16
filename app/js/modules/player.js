import Bullet from "js/modules/Bullet"
import Camera from "js/modules/Camera"

export default class Player {
    constructor(bulletController, enemyController, ctx) {
        this.bulletController = bulletController;
        this.enemyController = enemyController;
        this.ctx = ctx;
        this.isDead = false;
        this.canMove = true;
        this.canShoot = true;
        this.posX = 320;
        this.posY = 420;
        this.charW = 160;
        this.charH = 200;
        this.imgSrc = "../img/hero.png";
        this.cam = new Camera(this);
        this.img = new Image();
    };
    init() {
        this.controls();
    };
    render() {
        let i = 0;
        for (let zombie of this.enemyController.enemies) {
            if (this.attackedBy(zombie, i))
                return;
        }
        this.draw();
    }
    attackedBy(zombie, i) {
        if (zombie && this.enemyController.enemies) {
            if (zombie.x <= this.posX + 10) {
                this.isDead = true;
                return true;
            } else return false;
        }
    }
    controls() {
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }
    jump(time) {
        this.posY -= 150;
    };
    moveBack() {
        this.imgSrc = "../img/hero-flipped.png"
        this.canShoot = false;
        this.posX -= 80;
    };
    moveFw() {
        // console.log(this.posX);
        // console.log(this.obstacleController.obstacles[0].x);
        // for (var i = 0; this.obstacleController.obstacles; i++) {
        //     if (((this.obstacleController.obstacles[i].x + 300) - (this.posX)) <= 100 ){
        //         this.canMove = false;
        //     }else{
        //         this.canMove = true;
        //     }
        // }
        if (this.canMove) {
            this.cam.follow("right");
            this.imgSrc = "../img/hero.png"
            this.canShoot = true;
            this.posX += 80;
        }
    };
    draw() {
        this.ctx.drawImage(this.img, this.posX, this.posY, this.charW, this.charH);
        this.img.src = this.imgSrc;
    };
    onKeyDown = (e) => {
        let keyCode = e.keyCode;
        switch (keyCode) {
            case 32:
                /* Space Bar */
                if (this.canShoot)
                    this.bulletController.add(this.posX + 155, this.posY + 126, this.posX, this.enemies)
                else
                    return
                break;
            case 37:
                /* Arrow Left */
                if (this.posX == 0 || this.posX <= 320)
                    return;
                if (this.posX >= 320)
                    this.cam.follow("left");
                this.moveBack();
                break;
            case 38:
                /* Arrow Up */
                if (this.posY == 270)
                    this.posY = 420;
                else
                    this.jump();
                break;
            case 39:
                /* Arrow Right */
                if (this.posX == 4960) {
                    alert("¡Ganaste!")
                    return;
                }
                if (this.posX >= 320)
                    this.moveFw();
                break;
        }
    }

    onKeyUp = (e) => {
        if (e.keyCode == 38) { // jump
            this.posY = 420;
        }
    }

};