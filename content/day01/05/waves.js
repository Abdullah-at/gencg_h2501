const stripeCount = 14;
let t = 0;

function setup() {
  createCanvas(540, 540);
  noFill();
  stroke(0);
  strokeWeight(3);
}

function draw() {
  background(250);
  translate(0, height / 2);
  for (let i = 0; i < stripeCount; i++) {
    const y = map(i, 0, stripeCount - 1, -height / 2 + 20, height / 2 - 20);
    drawWave(y, i * 0.2 + t);
  }
  t += 0.01;
}

function drawWave(y, offset) {
  beginShape();
  for (let x = 0; x <= width; x += 15) {
    const n = noise(x * 0.01, offset);
    const sway = map(n, 0, 1, -40, 40);
    vertex(x, y + sin(x * 0.02 + offset) * 25 + sway);
  }
  endShape();
}
