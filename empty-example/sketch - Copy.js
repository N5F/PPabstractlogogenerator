function setup() {
  //set a canvas size
  createCanvas(6666, 6666);
  //set a background color
  background(0);
  //set a random stroke color
  stroke(random(255), random(255), random(255));
  //set a random fill color
  fill(22, random(255), random(255));
  

  //set a stroke weight
  strokeWeight(1);
//fade through different colors
 

  scale(1); 

  //write a text in the center of the canvas
  text("Hello World", width/2, height/2);
  //increase the size of the text
  textSize(10011);



}
let i = 1;
function draw() {
  //change fill color on mousepress
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  }
  

  //draw in the center of the canvas
  translate(width/2, height/2);

  //draw a rectangle and rotate it 45 degrees

  //rect(100, 100, 100, i++);
  rotate(i/180*PI + i);
  i++;
  //draw a circle with a square in the middle
  ellipse(200, 200, 100, 100);
  //draw a ellipse on mouse position
  ellipse(mouseX, mouseY, 100, 100);
  //draw a line from the center of the canvas to the mouse position
  line(0, 0, mouseX, mouseY);

  rect(i, 200, 100, 100);
  //draw a triangle
  triangle(i, 300, 400, 300, 350, 400);
  //draw a line
  line(i,i,i,i);

  //draw a point at a random location with random colors

  

}