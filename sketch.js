var towere,towerIMG,door,doorIMG,doorGroup,climber,climberIMG;
var climberGroup,ghost,gostIMG,invblock1,invblockGroup,sound1;
var gameState="play";

function preload(){
  towerIMG=loadImage("tower.png");
doorGroup=new Group()
  doorIMG=loadImage("door.png");
 climberIMG=loadImage("climber.png");
  climberGroup=new Group();
ghostIMG=loadImage("ghost-standing.png");
  sound1=loadSound("spooky.wav");
  
}

function setup(){
  createCanvas(600,600);
 // sound1.loop()
  tower = createSprite(300,300);
  tower.addImage("tower",towerIMG);
  tower.velocityY=2;
  ghost =createSprite(300,300);
  ghost.addImage(ghostIMG)
  ghost.scale=0.3;
  
  invblockGroup=new Group();
  
}
function draw (){
  background(0);
  if(gameState=="play"){
    
  
  if(tower.y>400){
    tower.y =300
  }
  spawndoor();
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
    
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
    
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
    
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if(invblockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
  gameState="end" ;
    
  }
  
  
  
  
  drawSprites()
  }
  if(gameState=="end"){
    textSize(30)
    fill("yellow"); 
  text("game over",200,60)
  }
}


function spawndoor(){
  if(frameCount%240==0){
    door=createSprite(200,-50);
    climber=createSprite(200,10);
    climber.addImage(climberIMG);
    door.addImage("door",doorIMG);
    
    door.x=Math.round(random(120,400))
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
  
    door.velocityY=1;
    door.lifetime=800;
    doorGroup.add(door);
    climberGroup.add(climber);
    ghost.depth=door.depth;
  ghost.depth=ghost.depth+1;
    var invblock1=createSprite(200,15);
     invblock1.width=climber.width;
    invblock1.height=2
    invblock1.x=door.x
    invblock1.velocityY=1;
    invblock1.debug=true;
                                 
   invblockGroup.add(invblock1);
    
  }
}
