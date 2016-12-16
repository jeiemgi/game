import Bullet from "js/modules/Bullet"

export default class BulletController {
    bullets = [];
    maxBullets = 10;

    constructor(enemyController) {
        this.enemyController = enemyController;
        this.x = 0;
        this.y = 0;
    }
    add(x, y, charPos) {
        if (this.bullets.length >= this.maxBullets) return
        this.bullets.push(new Bullet(this, x, y, charPos))
    }
    render(ctx) {
        let i = 0;
        for (let bullet of this.bullets) {
            if (this.collision(bullet, i)) {
                bullet.collide();
                this.remove(bullet);
                this.enemyController.remove(this.enemyController.enemies[i]);
            } else {
                bullet.render(ctx);
            }
            i += 1;
        }
    }

    collision(bullet, i) {
        if (bullet && this.enemyController.enemies[i]) {
            if (bullet.y < this.enemyController.enemies[i].y) return false;
            if (bullet.x >= this.enemyController.enemies[i].x ||
                bullet.x <= this.enemyController.enemies[i].enemyW) {
                return true;
            }
        } else return false;
    }

    remove(bullet) {
        let index = this.bullets.indexOf(bullet);
        if (index > -1) {
            this.bullets.splice(index, 1);
        }
    }


}