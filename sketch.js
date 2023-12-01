
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, engine, world;
var groundObj, leftSize, rightSize;


function preload() {

}

function setup() {
	createCanvas(1500,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	var options ={
		isStatic: true
	}

	ball = Bodies.circle(200, 50, 20, ball_options);
	World.add(world, ball);
	leftSize = Bodies.rectangle(1100, 600, 20, 120, options);
	World.add(world, leftSize);
	rightSize = Bodies.rectangle(1400, 600,20,120, options);
	World.add(world, rightSize);
	groundObj= Bodies.rectangle(width/2, 670, 0, 20, options);
	World.add(world, groundObj);

	//groundObj = new Ground(width / 2, 670, width, 20);
	//leftSize = new Ground(1100, 600, 20, 120 );
	//rightSize = new Ground(1200, 700, 20, 120);
 
	

	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);

}


function draw() {
	drawSprites();
	background(51);
	Engine.update(engine);
	ellipse(ball.position.x, ball.position.y, 20);
	rect(leftSize.position.x, leftSize.position.y, 20, 120);
	rect(rightSize.position.x, rightSize.position.y, 20,120);
	rect(groundObj.position.x, groundObj.position.y,20, 100);
	
	
	//groundObj.display();
	//leftSize.display();
	//rightSize.display();


	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 })
}
}
