
function preload() {
  img = loadImage("image.png");
}
function setup() {

  createCanvas(1920, 1080);
  background(img);
  frameRate(7);
}

function draw() {
  if (frameCount > 7) {
    for (var x = 0; x < 64; x++) {
      for (var y = 0; y < 64; y++) {
        fill(random(255), random(255), random(255), 100);
        ellipse(x * 30, y * 30, random(30), random(30));
      }
    }
  }
}