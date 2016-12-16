import Obstacle from "js/modules/Obstacle"

export default class ObstacleController{
    obstacles = [];
    constructor() {
    };
    render(ctx) {
        for (let obstacle of this.obstacles) {
            obstacle.render(ctx);
        }
    }
    add(x, y, type) {
        this.obstacles.push(new Obstacle(this, x, y, type))
    };
   remove(obstacle) {
        console.log(obstacle);
        let index = this.obstacles.indexOf(obstacle);
        if (index > -1) {
            this.obstacles.splice(index, 1);
        }
    }
    draw() {
        this.ctx.drawImage(this.img, this.EposX, this.EposY, this.enemyW, this.enemyH);
        this.img.src = this.imgSrc;
    };

};