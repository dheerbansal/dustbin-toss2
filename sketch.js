var ball, obstacle1, obstacle2, obstacle3, gorund
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(300,600,50,50);
	ball.shapeColor = "blue";

	obstacle1 = new Dustbin(850,700,40,120);
	obstacle1.shapeColor = "white";
	obstacle2 = new Dustbin(900,750,120,40);
	obstacle2.shapeColor = "white";
	obstacle3 = new Dustbin(950,700,40,120);
	obstacle3.shapeColor = "white";
	
	ground = new Ground(0,790,800,30);
	ground.shapeColor = "purple";


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  ball.display();
  
  drawSprites();
 
}



