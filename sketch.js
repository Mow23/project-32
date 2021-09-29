const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, platform, slingShot;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
   polygonImg = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand = new Ground(850,300,250,20);

    box1 = new Box(820,270,30,40);
    box2 = new Box(850,270,30,40);
    box3 = new Box(880,270,30,40);
    box4 = new Box(835,230,30,40);
    box5 = new Box(865,230,30,40);
    box6 = new Box(850,190,30,40);

    polygon = Bodies.circle(500,200,20);
    World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
  background("black");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    fill ("orange");
    box1.display();
    box2.display();
    box3.display();
    fill ("yellow");
    box4.display();
    box5.display();
    fill ("pink");
    box6.display();
    stand.display();
    fill("blue")
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y, 40,40);
    slingshot.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon);
  }

}