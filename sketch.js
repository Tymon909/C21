var fixedRect,movingRect;
var box1,box2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,50,50);
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  movingRect.velocityX=-2;
  fixedRect.velocityX=+2;
  box1=createSprite(100,100,100,100);
  box2=createSprite(100,300,100,100);
  box1.shapeColor="yellow";
  box2.shapeColor="yellow";
  box1.velocityY=+2;
  box2.velocityY=-2;
}

function draw() {
  background(255,255,255);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if(isTouching(box1,box2)){
    box1.shapeColor="blue";
    box2.shapeColor="blue";
  }
  else{
    box1.shapeColor="green";
    box2.shapeColor="green";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}







