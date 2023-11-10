let boxSize=30;
let angle1=0;
let anglex=0;
let balls=[];
let ballNum=40;
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight,WEBGL);
  cnv.parent('mainbg');
  
  angleMode(DEGREES);
  for(let i=0; i<ballNum; i++){
    balls.push(new movingBall());
  }
}

function draw() {
  // frameRate(4);
  background(25,2,2,0);
  noFill();
  // stroke('blue');
  // strokeWeight(2);
  angle1+=0.05;
  // anglex+=0.01;
  rotateZ(mouseX/30);
  // rotateX(mouseX);
  // box(boxSize);
  // push();
  for(let i=0 ; i<ballNum;i++){
  
    balls[i].move();
    balls[i].display();
  }
  // pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}