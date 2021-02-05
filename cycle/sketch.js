var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var gameover,gameoverImg;

var bellSound;

var END =0;
var PLAY =1;
var gameState = PLAY;

var pkinkCyclists,pinkImage,player1,pinkImage2;
var redImage,player3,redImage2;
var yellowImage,yellowImage2,player2;


var pinkCG,redCG,yellowCG;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");

   pinkImage= loadAnimation("opponent1.png","opponent2.png");
pinkImage2= loadAnimation("opponent3.png")
yellowImage= loadAnimation("opponent4.png","opponent5.png");
yellowImage2= loadAnimation("opponent6.png");
 redImage= loadImage("opponent7.png","opponent8.png");
 redImage2= loadImage("opponent9.png"); 
  
bellSound= loadSound("sound/bell.mp3");
  
gameoverImg = loadImage("gameOver.png");  
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
 path.velocityX = -(6 + 2*distance/150);
  
//creating boy running
 mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
 gameover = createSprite(250,150) 
  gameover.addImage(gameoverImg);
 gameover.scale=0.5;
  
pinkCG = createGroup();  
redCG = createGroup(); 
yellowCG = createGroup();
  

}

function draw() {
  background(0);
   
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  gameover.visible = false;
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
    distance = distance + Math.round(getFrameRate()/50);
   //code to reset the background
    if(path.x < 0 ){
  path.x = width/2;
    
    if(keyDown("space")) {
    bellSound.play();
    } 
      
    var select_oppPlayer = Math.round(random(1,3));
    
    if(World.frameCount % 150 == 0) {
      if(select_oppPlayer == 1) {
      pinkCyclists();
    }else if(select_oppPlayer == 2) {
      yellowCyclists();
    }else{
     redCyclists();
    }
    }
  
    else if(gameState === END){
      
     path.velocityX = 0;
      
      
      pinkCG.setVelocityXEach(0);
      redCG.setVelocityXEach(0);
      yellowCG.setVelocityXEach(0);
      
      
      
      
      
      
      
      
    }
    
  
  
  }
     }
}
function pinkCyclists(){
 player1=createSprite(480,Math.round(random(50,250),10,10));
player1.scale=0.06;  
player1.addAnimation("opponentPlayer1",pinkImage)  
 player1.lifetime=170; 
 player1.velocityX = -(6 + 2*distance/150);
pinkCG.add(player1);
}

function yellowCyclists(){
 player2=createSprite(480,Math.round(random(50,250),10,10));
player2.scale=0.06;  
player2.addAnimation("opponentPlayer2",yellowImage)  
 player2.lifetime=170; 
 player2.velocityX = -(6 + 2*distance/150);
yellowCG.add(player2);
}

function redCyclists(){
  player3=createSprite(480,Math.round(random(50,250),10,10));
player3.scale=0.06;  
player3.addImage("opponentPlayer3",redImage)  
 player3.lifetime=170; 
 player3.velocityX = -(6 + 2*distance/150);
redCG.add(player3);
}