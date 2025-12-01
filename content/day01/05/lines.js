let seed;
const tileSize = 60;

function setup() {
  seed = int(random(100000));
  randomSeed(seed);
  noiseSeed(seed);
  createCanvas(540, 540);
  noLoop();
  strokeWeight(3);
}

function draw() {
  background(250);
  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      drawTile(x, y);
    }
  }
}

function drawTile(x, y) {
  const choice = random();
  const padding = tileSize * 0.15;
  const x1 = x + padding;
  const y1 = y + padding;
  const x2 = x + tileSize - padding;
  const y2 = y + tileSize - padding;
  if (choice < 0.5) {
    stroke(0);
    line(x1, y1, x2, y2);
    line(x1, y2, x2, y1);
  } else {
    stroke(20);
    const step = tileSize / 5;
    for (let i = 0; i <= tileSize; i += step) {
      line(x + i, y1, x + i, y2);
    }
  }
}

function mousePressed() {
  seed = int(random(100000));
  randomSeed(seed);
  noiseSeed(seed);
  redraw();
}
