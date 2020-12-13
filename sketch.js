
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,dustbin,paper1 ;

function preload()
{
}

function setup() {
	
	
createCanvas(1400, 720);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	
	ground1 = new Ground(700,690,1400,30);
	paper1 = new Ball (200,300,40);
	dustbin = new Dustbin(1000,650);
	
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	//Engine.update(engine);

	//paper1.depth = 2;
	//dustbin.depth = 3;
	
	
	
  ground1.display();
  dustbin.display();
  paper1.display();
  

  textSize(24);
  fill("black")
  text(" 🧹🧹Press Up Arrow To Throw The Trash in the Dustbin 👔👔",300,100);

  
	
 
}

function keyPressed()	{
		if(keyCode === UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.28,y:-0.28});

		}
	}
