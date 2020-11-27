function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
 background(0);
 translate(200,200);
 rotate(-90);

 let hr = hour();
 let mn = minute();
 let sc = second();

 strokeWeight(9);
 stroke("red");
 noFill();
 let secondAngle = map(sc, 0, 60, 0, 360);
 arc(0,0,300,300,0,secondAngle);

 stroke("lime");
 let minuteAngle = map(mn, 0, 60, 0, 360);
 arc(0,0,280,280,0,minuteAngle);

 stroke("blue");
 let hourAngle = map(hr % 12, 0, 12, 0, 360);
 arc(0,0,260,260,0,hourAngle);

 strokeWeight(7);
 push();
 rotate(secondAngle);
 stroke("red");
 line(0,0,100,0);
 pop();

 push();
 rotate(minuteAngle);
 stroke("lime");
 line(0,0,75,0);
 pop();

 push();
 rotate(hourAngle);
 stroke("blue");
 line(0,0,50,0);
 pop();

}
