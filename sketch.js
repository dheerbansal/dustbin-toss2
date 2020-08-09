var ball, obstacle1, obstacle2, obstacle3, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(300,600,50,50);
	ball.shapeColor = "white";
	ball.scale = 2;


	obstacle1 = createSprite(820,720,20,120);
	obstacle1.shapeColor = "white";
	obstacle2 = createSprite(900,770,150,20);
	obstacle2.shapeColor = "white";
	obstacle3 = createSprite(980,720,20,120);
	obstacle3.shapeColor = "white";
	
	ground = new Ground(0,790,800,30);
	ground.shapeColor = "purple";


	


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  //rectMode(CENTER);
  background(0);
  ellipse();

  ground.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



