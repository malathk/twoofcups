let ang2 = 0;
class movingBall {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.zRange = height;
    this.z = random(this.zRange);
    this.valx = random(0,height);
    this.valy = random(0,width);
    this.valz = random(0,this.zRange);
    this.size = random(1, 20);
    this.c = color(168, 204, 124, 100);
    this.speed=1.15;
      // specularMaterial(850);
  }

  move() {
    // noise is to return a number from 0 to 1
    this.valx += 0.001;
    this.valy += 0.001;
    this.valz += 0.001;
    this.x = noise(this.valx) * width;
    this.y = noise(this.valy) * height;
    this.z = noise(this.valz) * this.zRange;
    // this.x= mouseX;
    // this.y=mouseY;
    // this.z=random(1,20);
    rotateZ(mouseX/200);
     rotateY(mouseY/200);
    
  }

  display() {
    push();
    translate(
      this.x-windowWidth/2,
      this.y - windowHeight/2 ,
      this.z - this.zRange / 2

    );
    ang2 += 0.2;
    // rotateY(ang2);
    rotate(ang2);
    fill(this.c);
    noStroke();
    shininess(9);
    specularMaterial(140);
    

    
    directionalLight(34, 161, 144, width/2, height, height/3);
     // directionalLight(80, 52, 99, width, height/2, height/2);
    ambientLight(214,239,199);
  pointLight(105, 2, 205, mouseX, mouseY/2, 50);
 pointLight(150,187,124, width/2,height/2, 10);
    pointLight(96, 97, 86, mouseX, -mouseY, 1);
    pointLight(127,120,210, -mouseX, -mouseY, 1);
    // specularColor(127,120,210);
     // pointLight(this.c, 0, 50, 50);
  
    // stroke(this.c);
    // stroke('white');
    // strokeWeight(0.5);
    sphere(this.size);
    // let box_x = this.size * 2 + 20;
    // let box_y = 10;
    // let box_z = 20;
    // // let petal = 4;
    // let angle = 360 / petal;
    // for (let i = 0; i < petal; i++) {
    //   rotate(angle);
    //   sphere(box_x, box_y, box_z);
    // }

    pop();
  }
}