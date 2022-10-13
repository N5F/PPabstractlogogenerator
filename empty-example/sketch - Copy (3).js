
function preload() {
  img = loadImage("image2.png");



}

let i = 5;

function setup() {

  // create a canvas size 1920 x 1080
  createCanvas(1920, 1080);
  // set the background color to black
  background(0);
  //set the image as the background
  background(img);

  // set the frame rate to 1 frame per second
  frameRate(60);

//load a image called myImage.jpg as img

//image(img, 960, 540);


//make a counter variable




}




function draw() {

//make the image small and bigger from the left corner
//image(img, 960, 540, i, i);


  i++
  //rotate the canvas by 0.01 radians 
  rotate(212/PI * i);

  
//write the frame count to the canvas

  //fill(211,2,44);
  //random color
  //fill(random(255), random(255), random(255));

fill(222)

  textSize(17);
  //set the stroke weight to 1
  strokeWeight(1);
  //set the stroke color to black
  stroke(0);
  //make the text bold
  textFont("Helvetica");


  
  text("PP" + i +"  ", 10, i*2); //random whitespaces why not
}


//rotate part   rotate(122/PI * i);