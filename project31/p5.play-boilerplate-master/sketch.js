const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var ground
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  createSprite(400, 200, 50, 50)
  
 

  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  ground.display();
  drawSprites();
}