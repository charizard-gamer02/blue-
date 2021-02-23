//Creating variables:
var blue

var zomB
var ground,g1
var gameState ="lvl0"
var blueleft,blueright,bluejump
var explotionimg
var cactiimg
var addHealthimg
var losehealthimg
var zomBimgwalk
var startimg
var  gameoverimg

function preload()
{
g1=loadImage("lvl1ground.png")
blueleft=loadAnimation("wl.png","wl2.png")
bluelefti=loadImage("wl2.png")
blueright=loadAnimation("wr.png","wr2.png")
bluejump=loadImage("jump.png")

}
  function setup() {
  createCanvas(1500,700);
  //Creating Sprites:
   blue = createSprite(30, 100, 40, 40);
   blue.addImage(bluelefti)
  // blue.addAnimation("LOL",blueright)
  // blue.addAnimation("LOL1",blueleft)
   
   
   
  zomB = createSprite(700,690,50,50)
  ground = createSprite(750,690,1500,20)
  ground.addImage("lol",g1)
  ground.x=ground.width/2
  ground.velocityX=-3
}

function draw() {
  background(0);
 //Giving infinite ground
  if(ground.x<0){
  ground.x=ground.width/2
  }
  //GameStates/level zero
  if(gameState==="lvl0"){
    textSize(20)
    text("Arrow keys to control the blue and press S to start!",350,100)
    if(keyDown("s")){
      gameState="lvl1start"
    }
   
  
  }
  //Level one start
  if(gameState==="lvl1start"){
    
  
  }
  //Code for the blue to move
  if(keyIsDown(UP_ARROW)){
    console.log("SUP")
blue.velocityY=-5
  }
blue.velocityY = blue.velocityY + 0.3
  if(keyIsDown(LEFT_ARROW)){
    blue.x=blue.x-3
      }
   if(keyIsDown(RIGHT_ARROW)){
        blue.x=blue.x+3
          }
 
          blue.collide(ground)
  drawSprites();
}