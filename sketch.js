let drawing = false;
let cnv;

let imgBG;
let linkedin, github, behance, gmail;

let start = 0;

function preload() {
  imgBG = loadImage('scratch.png');
  
  linkedin = loadImage('linkedin.png');
  github = loadImage('github.png');
  behance = loadImage('behance.png');
  gmail = loadImage('gmail.png');
  
}

function setup() {
  cnvWidth = windowWidth/2.5;
  cnvHeight = windowHeight/1.6;
  cnvPosx = windowWidth/1.8;
  cnvPosy = windowHeight/4.9;
  cnv = createCanvas(cnvWidth, cnvHeight);
  cnv.position(cnvPosx, cnvPosy); 
  background(0);
  
  
}

function windowResized() {
  cnvWidth = windowWidth/2.5;
  cnvHeight = windowHeight/1.6;
  cnvPosx = windowWidth/1.8;
  cnvPosy = windowHeight/4.9;
  cnv = createCanvas(cnvWidth, cnvHeight);
  cnv.position(cnvPosx, cnvPosy);
  background(0);
}

function draw() {
  //image(imgBG, 0, 0, cnv.width, cnv.height);
  
  
  if(drawing){
    erase();
    ellipse(mouseX, mouseY, 40, 10);
    rectMode(CENTER);
    rect(mouseX, mouseY, 35, 10);
    noErase();
  }
  
}

function mousePressed() {
  drawing = true;
}
function mouseReleased() {
  drawing = false;
}
