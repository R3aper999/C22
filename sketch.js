const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine, world;

var ground;
var ball;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {

    isStatic: true 
  }

  ground = Bodies.rectangle(400, 360, 800, 40, ground_options);

  World.add(world, ground);


  var ball_options = {
    restitution: 0.8
  }

  ball = Bodies.circle(400, 40, 60, ball_options);
  World.add(world, ball);
}

function draw() {
  background("purple"); 
  Engine.update(engine);

  rectMode(CENTER);
  fill("black");
  rect(ground.position.x, ground.position.y, 800,40 );


  fill("black");
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 80,80);
  //console.log(ground);
}