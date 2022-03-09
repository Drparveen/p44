var engine 
var world 
var ground;



 const Engine = Matter.Engine;
const World= Matter.World;
const Body =Matter.Body;
const Bodies=Matter.Bodies;



function setup (){
createCanvas(1500,500);
engine=Engine.create()
world=engine.world;
var ground_properties={
  isStatic:true

}

ground=Bodies.rectangle(750,450,1500,10,ground_properties)

World.add(world,ground);

}

function draw(){


background("black");
Engine.update(engine)
rectMode(CENTER);
fill("yellow")
rect(ground.position.x,ground.position.y,1500,10);


}
