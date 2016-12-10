// Corregir all obj syntax
var mainCharachter = {
  var images : {},
  var canvas : document.getElementById('myCanvas'),
  var context: canvas.getContext("2d"),

  var charX = 90,
  var charY = 750,

  loadImage("leftArm"),
  loadImage("legs"),
  loadImage("torso"),
  loadImage("rightArm"),
  loadImage("head"),
  loadImage("hair"),

  loadImage : function(name) {
    images[name] = new Image();
    images[name].onload = function() { 
        resourceLoaded();
    }
    images[name].src = '../img/' + name + ".png";
  }

  var totalResources = 6;
  var numResourcesLoaded = 0;
  var fps = 30;

  function resourceLoaded() {

    numResourcesLoaded += 1;
    if(numResourcesLoaded === totalResources) {
      setInterval(redraw, 1000 / fps);
    }
  }
  function drawEllipse(centerX, centerY, width, height) {
    
    context.beginPath();
    
    context.moveTo(centerX, centerY - height/2);
    
    context.bezierCurveTo(
      centerX + width/2, centerY - height/2,
      centerX + width/2, centerY + height/2,
      centerX, centerY + height/2);

    context.bezierCurveTo(
      centerX - width/2, centerY + height/2,
      centerX - width/2, centerY - height/2,
      centerX, centerY - height/2);
   
    context.fillStyle = "black";
    context.fill();
    context.closePath();  
  }
  function redraw() {
    var x = charX;
    var y = charY;

    canvas.width = canvas.width; // clears the canvas 
                        
    context.drawImage(images["leftArm"], x + 40, y - 42);
    context.drawImage(images["legs"], x, y);
    context.drawImage(images["torso"], x, y - 50);
    context.drawImage(images["rightArm"], x - 15, y - 42);
    context.drawImage(images["head"], x - 10, y - 125);
    context.drawImage(images["hair"], x - 37, y - 138);
    drawEllipse(x + 47, y - 68, 8, 14); // Left Eye
    drawEllipse(x + 58, y - 68, 8, 14); // Right Eye
  }
}
