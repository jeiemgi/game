import Enemy from "js/modules/Enemy"

export default class EnemyController {
    enemies = [];
    constructor() {
    };
    render(ctx) {
        for (let enemy of this.enemies) {
            enemy.render(ctx);
        }
    }
    add(x, y, type) {
        this.enemies.push(new Enemy(this, x, y, type))
    };
   remove(enemy) {
        let index = this.enemies.indexOf(enemy);
        if (index > -1) {
            this.enemies.splice(index, 1);
        }
    }
    draw() {
        this.ctx.drawImage(this.img, this.EposX, this.EposY, this.enemyW, this.enemyH);
        this.img.src = this.imgSrc;
    };

};