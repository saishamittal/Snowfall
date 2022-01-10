const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var drops =[]

var bg;

function preload() {
  bg = loadImage("snow2.jpg");
}


function setup() {
  engine = Engine.create( )
  world = engine.world
  createCanvas(800,400);
  if(frameCount%150===0) {
    for(var i = 0; i<100; i++) {
      drops.push(new Snowfall(random(0,400),random(0,400)))
    }
  }
  //create your character sprite

}

function draw() {
  Engine.update(engine)
  if (bg) {
    background(bg);  
  }
  for (var i = 0;i<100; i++) {
    drops[i].display()
    drops[i].updateY()
  }
  //draw sprites
  
}