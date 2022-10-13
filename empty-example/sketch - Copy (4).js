
function preload() {
  //img = loadImage("image2.png");



}

let i = 5;
let min = 0.999;

function setup() {

  // create a canvas size 1920 x 1080
  createCanvas(1920, 1080);
  // set the background color to black
  background(0);


  // set the frame rate to 1 frame per second
  frameRate(10);

//load a image called myImage.jpg as img

//image(img, 960, 540);

//stroke weight of 1
strokeWeight(1);



}




function draw() {
  //draw canvas in the middle of the screen
  translate(width/2, height/2);

//make a circle with random size and random colors
  
  ellipse(0, 0, random(1900 - min), random(1000 - min));
  //make it semi transparent
  fill(random(255), random(255), random(255), 100);
  //shrink the circle
 
  scale(min);
  console.log(min);
  min++;

  //draw a triangle with random colors in the middle of the canvas
  fill(random(255), random(255), random(255), 100);
  triangle(0, 2, 0, 44, 222, 0);
  //rotate the triangle randomly
  rotate(random(360));
  //translate it randomly
  translate(random(1000), random(1000));
  



 
}


//rotate part   rotate(122/PI * i);