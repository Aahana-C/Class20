var fixedRect, movingRect; 

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);//25 - fixedRect.width/2
  fixedRect.shapeColor ="green";//add - 65
  movingRect = createSprite(400, 200, 80, 50);//40 - movingRect.width/2
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  //rightside or bottom - movingRect (which has greater value)
  //leftside or top- fixedRect
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
     movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
     fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}