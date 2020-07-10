var player, score, ground, groundImage, gameOver, restart;
var banana, bananaGroup, stone, stoneGroup;
var player_running, background1, backgroundImage;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  
  backgroundImage = loadImage("jungle2.jpg");

  player_running = loadImage("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  groundImage = loadImage("ground.jpg");
  bananaImage = loadImage("Bananas.png");
  stone_image = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(200, 150, 400, 20);
  ground.addImage("ground", groundImage);
  ground.velocityX = -4;
  ground.scale = 2;
  
  background1 = createSprite(200, 150, 400, 20);
  background1.addImage("backImage", backgroundImage);
  background1.velocityX = -4;
  background1.scale = 2;
  
  player = createSprite(300, 220, 400, 20);
  player.addAnimation("running", player_running);
  player.scale = 0.15;


  bananaGroup = new Group();
  stoneGroup = new Group();


  background1.x = background1.width / 2;
  ground.x = ground.width / 2;
  score = 0;

}
function draw() {
    
   background(255);
  edges = createEdgeSprites();
  
   
  if (gameState === PLAY) {
   if (keyDown(LEFT_ARROW)) {
      player.x = player.x - 15;
    }
    if (keyDown(RIGHT_ARROW)) {
      player.x = player.x + 15;
    }
     if (ground.x < 0){
    ground.x = ground.width/2;
     }

    if (background1.x < 0) {
      background1.x = background1.width;
    }


    if (stoneGroup.isTouching(edges[3])) {
      stoneGroup.destroyEach();
    }
    
    if (bananaGroup.isTouching(player)) {
      bananaGroup.destroyEach();
      score = score+ 2;
    }
  if (stoneGroup.isTouching(player)) {
    gameState = END;
  }
    

    banana();
    obstacles();
    }

   else if (gameState === END) {
    player.changeAnimation("Monkey.png");
    bananaGroup.setVelocityYEach(0);
    stoneGroup.setVelocityYEach(0);
    bananaGroup.setLifetimeEach(-1);
    stoneGroup.setLifetimeEach(-1);
    background1.velocityX = 0;
    ground.velocityX = 0;

  }

 if(score > 0 && score%10===0){
 switch(score){
   case 5:
      player.scale = player.scale + 1;
          break;
          
          case 10:
     player.scale = player.scale + 1;
     break;
     
      case 15:
      player.scale = player.scale + 1;
          break;
          
          case 20:
     player.scale = player.scale + 1;
     break;
     
      case 25:
      player.scale = player.scale + 1;
          break;
          
          case 30:
     player.scale = player.scale + 1;
     break;
     
      case 35:
      player.scale = player.scale + 1;
          break;
          
          case 40:
     player.scale = player.scale + 1;
     break;
     
      case 45:
      player.scale = player.scale + 1;
          break;
          
          case 50:
     player.scale = player.scale + 1;
     break;
     
 
 }
 
 
 
 }
  console.log(background1.x);

  drawSprites();
  stroke("blue");
  textSize(17);
  fill("blue");
  text("score:" + score, 200, 50);

}

function obstacles() {
  if (frameCount % 60 === 0) {
    var stone = createSprite(random(100, 600), 55, 10, 40);
    stone.addAnimation("stone", stone_image);
    stone.scale = 0.1;
    stone.velocityY = +(2 + 1 * score / 10);
    stone.lifetime = 1000;
    stoneGroup.add(stone);
  }
}

function banana() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(random(100, 600), 50, 10, 40);
    banana.addAnimation("bananafalling", bananaImage);
    banana.scale = 0.01;
    banana.velocityY = +(2 + 1 * score / 10);
    banana.lifetime = 1000;
    bananaGroup.add(banana);
  }
}
  
  
  
  
  
  
  
