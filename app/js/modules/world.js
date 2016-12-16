import Player from "js/modules/Player"
import BulletController from "js/modules/BulletController"

export default class World {
    constructor() {
        this.myCanvas = document.getElementById('myCanvas');
        this.canW = myCanvas.width;
        this.canH = myCanvas.width;
        this.ctx = this.myCanvas.getContext("2d");
        this.bulletController = new BulletController();
        this.p1 = new Player(this.bulletController);
        this.bg = new Image();

    };
    init() {
        this.p1.init(); // Inicializa el jugador 1
        this.render(); // Renderiza el Mundo
    };
    setBg(){
        this.ctx.drawImage(this.bg, 0, 0, 5512, 800);
        this.bg.src = "../img/bg.png";
    }
    render() {
        requestAnimationFrame(this.render.bind(this));
        this.ctx.clearRect(0, 0, this.canW, this.canH);
        this.setBg();
        this.p1.render(this.ctx);
        this.bulletController.render(this.ctx);
    };

}
