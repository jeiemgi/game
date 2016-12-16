import Bullet from "js/modules/Bullet"

export default class BulletController {
    bullets = [];
    maxBullets = 10;

    constructor(enemyController, obstacleController) {
        this.enemyController = enemyController;
        this.obstacleController = obstacleController;
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
            } else if (this.collisionO(bullet, i)) {
                bullet.collide(bullet, i);
                this.remove(bullet);
                this.obstacleController.remove(this.obstacleController.obstacles[i]);
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
    collisionO(bullet, i) {
        console.log('test');
        if (bullet && this.obstacleController.obstacles[i]) {
            if (bullet.y < this.obstacleController.obstacles[i].y) return false;
            if (bullet.x >= this.obstacleController.obstacles[i].x ||
                bullet.x <= this.obstacleController.obstacles[i].obstacleW) {
                return true;
            }
        }
    }

    remove(bullet) {
        let index = this.bullets.indexOf(bullet);
        if (index > -1) {
            this.bullets.splice(index, 1);
        }
    }


}