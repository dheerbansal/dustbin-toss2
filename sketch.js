var  ball, obstacle1,obstacle2,obstacle3,ground, dustbinIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function preload(){
	dustbinIMG = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	
	ball = new Ball(300,700,50);

	
	


	obstacle1 = new Target(835,720,20,120);
	obstacle1.visible = false
	//obstacle1.shapeColor = "white";
	obstacle2 =new Target(920,790,150,20);
	obstacle2.visible = false
	//obstacle2.shapeColor = "white";
	obstacle3 = new Target(1000,720,20,150);
	obstacle3.visible = false
	//obstacle3.shapeColor = "white";

	dustbin = createSprite(950,700,400,750);
	dustbin.addImage(dustbinIMG);
	dustbin.scale = 0.6
	
	ground = new Ground(600,790,1200,20);
	ground.shapeColor = "purple";

	var render = Render.create({
		element:document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});
	Engine.run(engine);
  
}

function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(255);
  //ellipse();
  

  //keyPressed();

  ground.display();
  ball.display();
 // obstacle1.display();
  //obstacle2.display();
  //obstacle3.display();
  
 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
  }