var car, wall;
var speed, weight;
var  deformation;


function setup() {
  createCanvas(800,400);
  car = createSprite(0, 200, 40, 40);
  car.shapeColor = "white";
  

  wall = createSprite(700, 200, 60, 200);

  speed = Math.round(random(5, 9));
  weight = Math.round(random(400, 1500));
  deformation = (0.5 * weight * speed * speed)/22500;
}

function draw() {
  background(0);
  
  car.velocityX = speed;
  console.log(speed);
  console.log (deformation);

  if(wall.x - car.x <= car.width/2 + wall.width/2){
   car.velocityX = 0;
  }

  if(deformation <= 0.8){
    car.shapeColor = "green"
  }

  if(deformation > 0.8 && deformation < 1.8 ){
   car.shapeColor = "yellow"
  }

  if(deformation > 1.8){
    car.shapeColor = "red"
  }

  drawSprites();
}