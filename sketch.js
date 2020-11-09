var fixedRect, movingRect;
var o1,o2,o3;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green"
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green"
  o1 = createSprite(100, 100, 50, 50);
  o2 = createSprite(200, 100, 50, 50);
  o3 = createSprite(300, 100, 50, 50);

  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect, o3)){
    o3.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    o3.shapeColor="green";
    movingRect.shapeColor="green";
 
    
  }
   bounceOff(movingRect,fixedRect)
    drawSprites();
}

