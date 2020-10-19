
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500, 500)
monkey = createSprite(60, 430, 40, 40)  
monkey.addAnimation("monk", monkey_running);
monkey.scale = 0.1; 
  
ground = createSprite(250, 450, 500, 10);
  

}


function draw() {
background(rgb(170, 240, 250));

noStroke();
fill(rgb(255, 255, 0)) 
ellipse(30, 40, 50, 50)  
  
fill(rgb(0, 220, 0))  
rect(1, 430, 500, 70);  
  
if(keyDown("space") && monkey.y >> 200) {
monkey.velocityY = -15 ;
}
  
monkey.velocityY = monkey.velocityY + 0.6;
monkey.collide(ground);
 

  
ground.visible = false;
  
spawnObstacles();
spawnBananas();
drawSprites(); 
  
fill("black")
survivalTime = Math.round(frameCount/frameRate())
text("Survival Time : " + survivalTime, 250, 40);
}


function spawnObstacles() {
if(frameCount%120 == 0){
obstacle = createSprite(430, 430, 30, 30);
obstacle.addImage("rock", obstacleImage)
obstacle.scale = 0.1;
obstacle.velocityX = -4;
}
  
}

function spawnBananas() {
if(frameCount%240 == 0){
banana = createSprite(430, 220, 30, 30);
banana.addImage("yum", bananaImage)
banana.scale = 0.1;
banana.velocityX = -4;
}
}