import Player from "js/modules/Player"
import BulletController from "js/modules/BulletController"
import EnemyController from "js/modules/EnemyController"
import ObstacleController from "js/modules/ObstacleController"

export default class World {
    constructor() {
        this.myCanvas = document.getElementById('myCanvas');
        this.ambient = new Audio('../sounds/ambient.mp3');
        this.ctx = this.myCanvas.getContext("2d");
        this.canW = myCanvas.width;
        this.canH = myCanvas.width;
        this.enemyController = new EnemyController();
        this.obstacleController = new ObstacleController();
        this.bulletController = new BulletController(this.enemyController, this.obstacleController);
        this.p1 = new Player(this.bulletController, this.enemyController, this.ctx);
        this.bg = new Image();
    };
    init() {
        this.ambient.play();
        this.p1.init(); // Inicializa el jugador 1

        this.enemyController.add(1500, 410, 1);
        this.enemyController.add(1650, 450, 1);
        this.enemyController.add(1900, 420, 1);

        this.enemyController.add(2600, 440, 2);
        this.enemyController.add(2950, 470, 2);
        this.enemyController.add(3200, 420, 2);

        this.obstacleController.add(4000, 420, 1);
        this.obstacleController.add(4300, 420, 2);

        this.render(); // Renderiza el Mundo
    };
    setBg() {
        this.ctx.drawImage(this.bg, 0, 0, 5512, 800);
        this.bg.src = "../img/bg.png";
    }
    render() {
        if (this.p1.isDead != true) {
            requestAnimationFrame(this.render.bind(this));
            this.ctx.clearRect(0, 0, this.canW, this.canH);
            this.setBg();

            this.p1.render(); /* Personaje */
            this.bulletController.render(this.ctx); /*   Balas   */
            this.enemyController.render(this.ctx); /* Enemigos */
            this.obstacleController.render(this.ctx); /* Obstaculo */

        } else {
            alert("Perdiste ahora eres un Zombie")
        }
    };

}