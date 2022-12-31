let x=[];
let y=[];
let rad=[];
let img;
let pColour=[];

function preload(){
img = loadImage("Portrait.jpeg")
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);
  background(50);
  image(img,0,0);
  loadPixels();
  noStroke();
  for(let i = 0; i<40; i++){
  rad.push(1);
  x.push(random(0,img.width))
  y.push(random(0,img.height))
  }

}

function draw() {
  
  for(let i = 0; i<40; i++){
      
    if(rad[i] > 10){
    rad[i] = 1;
    x[i] = random(0,img.width)
    y[i] = random(0,img.height)
  }
  
  pColour[i] = img.get(x[i],y[i]);
  fill(pColour[i]);
  rect(x[i],y[i],rad[i]);
  rad[i]+=2;
  
  } 
}
