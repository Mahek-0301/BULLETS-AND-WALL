var bullet,wall;
var speed,weight;
var thickness;

function setup(){
    createCanvas(1200,400);

    thickness = random(22,83);
    
    weight = random(35,52);

    speed = random(223,321); 
    
    bullet = createSprite(100,250,50,50);
    bullet.velocityX = speed;

    wall = createSprite(1100,200,thickness,height/2);
    wall.shapeColor = color(80,80,80);

   

}

function draw(){
  background("black");

  if(hasCollided(bullet,wall)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = "red";
    }

    if(damage<10){
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}
