var bullet,wall;
var speed,weight,thickness;




function setup() {
  createCanvas(1600,400);
  
  speed=random(23,32)
  thickness=random(22,83);
  weight=random(30,52)

   bullet=createSprite(50,200,90,50);
   bullet.velocityX=speed
  
 wall=createSprite(1500,200,60,height/2);
wall.shapeColor=color(80,80,80)
}

function draw() {
  background(255,255,255);  
  
  if (hasCollided(bullet,wall))
  {
 bullet.velocityX=0;
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 
 if(damage>10){
 wall.shapeColor=color(255,0,0);
 
 
 }
 
 if(damage<10){
   wall.shapeColor=color(0,255,0);
   
   
   }
 
  }
 
  drawSprites();
}
function hasCollided(bullet,wall)
{
 bulletRightEdge=bullet.x+bullet.width;
 wallLeftEdge=wall.x;
 if (bulletRightEdge>=wallLeftEdge)   
 {

  return true


 }   
 
 return false;

}
















