var rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8;
var tan1, tan2, tan3, tan4;
var quad1, quad2;
var obj1, obj2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(185, 380, 20, 390);
  rect2 = createSprite(550, 380, 20, 390);
  rect3 = createSprite(225, 380, 58, 200);
  rect4 = createSprite(285, 380, 58, 200);
  rect5 = createSprite(345, 380, 58, 200);
  rect6 = createSprite(405, 380, 58, 200);
  rect7 = createSprite(465, 380, 55, 200);
  rect8 = createSprite(515, 380, 45, 200);

  tan1 = createSprite(247.5, 252.5, 100, 50);
  tan2 = createSprite(350, 252.5, 100, 50);
  tan3 = createSprite(470, 252.5, 130, 50);

  quad1 = createSprite(240, 200, 50, 50);
  quad2 = createSprite(490, 200, 50, 50);
}

function draw() {
  background(106,181,216);  
  triangle(215,175,265,175,240,125);
  triangle(465,175,515,175,490,125);

  rect1. shapeColor = "brown";
  rect2. shapeColor = "brown";
  rect3. shapeColor = "pink";
  rect4. shapeColor = "pink";
  rect5. shapeColor = "pink";
  rect6. shapeColor = "pink";
  rect7. shapeColor = "pink";
  rect8. shapeColor = "pink";
  
  tan1. shapeColor = "pink"; 
  tan2. shapeColor = "pink";
  tan3. shapeColor = "pink";

quad1. shapeColor = "pink";
quad2. shapeColor = "pink";
  drawSprites();
}