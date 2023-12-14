let pikminBrushes = [];
let currentBrush = 0;

function preload() {
  pikminBrushes[0] = loadImage('pikminRed.png'); 
  pikminBrushes[1] = loadImage('pikminPurple.webp'); 
  pikminBrushes[2] = loadImage('pikminBlue.webp'); 
  pikminBrushes[3] = loadImage('https://pikmin.wiki.gallery/images/thumb/8/8d/P4_Yellow_Pikmin.png/150px-P4_Yellow_Pikmin.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

alert("press 1,2,3,4 to change brushes! press c to clear");


function draw() {
}

function mouseDragged() {
  let brushSize = random(20, 100); 
  
  image(pikminBrushes[currentBrush], mouseX, mouseY, brushSize, brushSize); 
}

function changeBrush(brushIndex) {
  currentBrush = brushIndex;
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(255);
  }
  
  else if (key === '1') {
    currentBrush = 0; 
  } else if (key === '2') {
    currentBrush = 1; 
  } else if (key === '3') {
    currentBrush = 2;
  } else if (key === '4') {
    currentBrush = 3;
  }
}
