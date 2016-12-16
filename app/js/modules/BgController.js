// export default class BgController {
//     constructor(ctx) {
//         this.ctx = ctx;
//         this.img = new Image();
//         this.bgW = 5512;
//         this.bgH = 800;
//         this.canvasX = 0;
//     };

//     render() {
//         this.draw();
//     };

//     draw(){
//         this.ctx.drawImage(this.img, this.canvasX, 0, this.bgW, this.bgH);
//         this.img.onload = () => {
//             this.ctx.drawImage(this.img, this.canvasX, 0, this.bgW, this.bgH);
//         }
//         this.img.src = "../img/bg.png";
//     };
// }