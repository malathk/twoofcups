let img;
let tileW;
let tileH;
let c1;
let c2;

function preload (){
    img = loadImage("imgs/cupss.jpg");
}

let imData = []

function setup() {
  
  createCanvas(windowWidth, windowHeight,WEBGL);

   // Setting the amount of tiles //// detail
   img.resize(120, 120);

   if (pixelDensity() === 2) {
    pixelDensity(1);
    }
  
//   c1=color(255,0,0);
//   c2=color(0,0,255);

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
    
      // get the color
      c = img.get(x,y);
      // calc bright
      let b = brightness(c);

      // calculate the depth
      let scalar = map(b,0,255,0,1);
      imData.push([c, b, scalar]);
    }
}

    // frameRate(120)
}

function draw() {
  background(12, 90, 145);
  noStroke();
  
   let // Calculate the width and the height of a single tile
   tileW = width / img.width;
   tileH = height / img.height;
  
let rotation = frameCount;
//rotateY(radians(rotation));
//rotateX(radians(45));

// lerping colorcome back to l8r :P

/*for (let x = 0; x < width; x++) {
   
    let l = norm(x, 0, width);
    let m = lerpColor(c1,c2,l);
    fill(m);
    rect(-x+900, 400, 1, -height);
  }*/


   
    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        // get the color
        const [c, b, scalar] = imData[(x * img.height) + y]      

       fill(103, 177, 230);

        push();
          // visual to the center
          translate(-width/2, -height/2);
          //let depth = 200;
          
         
          let z = map(b, 0, 255, frameCount * 30, 0);
          if (frameCount>38){
            frameCount = 0;
          }

            push();
              translate(x*tileW, y*tileH,z + frameCount); 
              
              box(tileW*scalar,tileH*scalar,tileW);
          pop();
        pop();
    }
    }
}



