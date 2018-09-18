
function setup() {
  createCanvas(800, 400);
  background(204);
  strokeWeight(2);
}

var x = 80
var y = 40
var d = 40

function draw() {
  for(var i = 1; i < 7; i++) {
    noFill();
    ellipse(x, y, d*i, d*i)
  }
  for(var i = 1; i < 7; i++) {
    noFill();
    ellipse(x*3, y, d*i, d*i)
  }
}

function draw() {
  for(var i = 1; i < 15; i++) {
    fill(255);
    rect(x*i, y*i, d*2, d)
  }
  rect(0, 0, 80, 40);
}
