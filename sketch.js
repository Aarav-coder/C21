function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(100,100,100,100);
rect1 = createSprite(50,100,50,50);
rect2 = createSprite(750,100,50,50);
rect3 = createSprite(50,50,50,50);
rect1.shapeColor = "green";
console.log ("hello");
rect2.shapeColor = "red";
rect1.velocityX = 3;
rect2.velocityX = -3;
}

function draw() {
  background(0); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if (isTouching(fixrect,movingrect)) {
    movingrect.shapeColor = "red";
    fixrect.shapeColor = "red";
  }
  else {
    movingrect.shapeColor = "green";
    fixrect.shapeColor = "green";
  }
  bounceOff (rect1,rect2);
  drawSprites();
}
