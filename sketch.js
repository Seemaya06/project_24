
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	
}

function setup() {
	createCanvas(1516, 720);


	engine = Engine.create();
	world = engine.world;

	  left = new Dustbin(1140, 564, 20, 100);
    bottom = new Dustbin(1250 , 605, 200, 20);
    right = new Dustbin(1360, 564, 20, 100);

    paper = new Paper(200, 600, 10);
    //console.log(paper.y);
	  ground =new Ground(width / 2+2, 620, width, 10,{isStatic: true});
    World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(102, 255, 255);

  
	
 
  paper.display();
  left.display();
  bottom.display();
  right.display();
  ground.display();

  fill(255, 0, 225);
	strokeWeight(10)
	stroke("yellow");
	textSize(50);
	textFont("Kristen ITC");
  text("CRUMPLED BALLS - 1", width/2 - 205 , 75);  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x: 12,y: -13});
	}
  }


