
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bob1,bob2,bob3,bob4,bob5;

var sling1,sling2,sling3,sling4,sling5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,300,20);
	bob1 = new Bob(280,300,30)
	bob2 = new Bob(340,300,30)	
	bob3 = new Bob(400,300,30)
	bob4 = new Bob(460,300,30)
	bob5 = new Bob(520,300,30)

	sling1 = new Sling(bob1.body,roof.body,-120)
	sling2 = new Sling(bob2.body,roof.body,-60)
	sling3 = new Sling(bob3.body,roof.body,0)
	sling4 = new Sling(bob4.body,roof.body,60)
	sling5 = new Sling(bob5.body,roof.body,120)


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("pink");
 
  roof.display();
  bob3.display();
  bob2.display();
  bob1.display();
  bob4.display();
  bob5.display();
  sling3.display();
  sling2.display();
  sling1.display();
  sling4.display();
  sling5.display();
  
  
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-30})
		console.log("keyPressed")
	}
	}

	function mouseDragged(){
		//Matter.Body.setPosition(bob1.body,{x:mouseX,mouseY})
	}









