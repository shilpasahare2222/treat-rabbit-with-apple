var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleing
var leaf,leafing

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleing = loadImage("apple.png");
  leafing = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
 spawnapple();
  spawnleaf();

}
  function spawnapple() {
   
     if (frameCount % 80 === 0) {
      apple = createSprite(100,100,20,30);
      apple.x = Math.round(random(10,100));
      apple.addImage(appleing);
      apple.scale = 0.1;
      apple.velocityX = 3;
      apple.lifetime = 200;
     
      }
  }

function spawnleaf(){
  if (frameCount % 80 === 0) {
    leaf = createSprite(100,100,20,30);
    leaf.y = Math.round(random(10,100));
    leaf.addImage(leafing);
    leaf.scale = 0.1;
    leaf.velocityX = 3;
    leaf.lifetime = 200;
   
    }
}













