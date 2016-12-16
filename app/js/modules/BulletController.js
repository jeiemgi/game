import Bullet from "js/modules/Bullet"

export default class BulletController {
    bullets = [];
    maxBullets = 10;

    constructor() {

    }

    add(x, y) {
        if (this.bullets.length >= this.maxBullets) return
        this.bullets.push(new Bullet(this, x, y))
    }

    render(ctx) {
        for (let bullet of this.bullets) {
            bullet.render(ctx);
        }
    }

    collision(object) {

    }

    remove(bullet) {
        let index = this.bullets.indexOf(bullet);
        if (index > -1) {
            this.bullets.splice(index, 1);
        }
    }


}