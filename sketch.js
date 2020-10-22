/* const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; */

var hr, mn, sc;
var clock;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(400,200);

  rotate(90);

  hr = hour();
  mn = minute();
  sc = second();
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 2, 242);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(11, 241, 25);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  noFill();
  strokeWeight(7);
  stroke(255,0,0);
  arc(0, 0, 300, 300, 0, scAngle);

  noFill();
  strokeWeight(7);
  stroke(0,2,242);
  arc(0, 0, 280, 280, 0, mnAngle);

  noFill();
  strokeWeight(7);
  stroke(11,241,25);
  arc(0, 0, 260, 260, 0, hrAngle);
}