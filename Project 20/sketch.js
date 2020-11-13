
var fixedRect, movingRect;
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1200,800);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

if(wall.x-car.x < (car.width + wall.width)/2) {
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180) {
    car.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0);
  }
  if(deformation < 100) {
    car.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}