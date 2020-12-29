
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5,bobBodyPos;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);

	bob1= new Bob(150,400,35,35);
	bob2= new Bob(220,400,35,35);
	bob3=new Bob(290,400,35,35);
  bob4=new Bob(360,400,35,35);
  bob5=new Bob(430,400,35,35);
  roof=new HangWall(300,100,400,50);

  rope1 = new Rope(bob1.body,{x:150,y:100});
  rope2 = new Rope(bob2.body,{x:220,y:100});
  rope3 = new Rope(bob3.body,{x:290,y:100});
  rope4 = new Rope(bob4.body,{x:360,y:100});
  rope5 = new Rope(bob5.body,{x:430,y:100});
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function mouseDragged(){

Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
  

}
 function mouseReleased(){

  
 }
