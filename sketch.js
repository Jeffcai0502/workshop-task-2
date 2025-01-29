let circles = [];

function setup() {
  createCanvas(400, 400);
  background(220);

  setInterval(() => {
    let x = random(width);
    let y = random(height);
    let size = random(10, 100);
    let col = color(random(255), random(255), random(255), random(150, 255));
    circles.push({ x, y, size, col, growing: true });
  }, 1000);

  setInterval(() => {
    for (let circle of circles) {
      circle.col = color(random(255), random(255), random(255), random(150, 255));
    }
  }, 2000);
}

function draw() {
  background(220);
  for (let circle of circles) {
    if (circle.growing) {
      circle.size += 0.5;
      if (circle.size > 100) circle.growing = false;
    } else {
      circle.size -= 0.5;
      if (circle.size < 10) circle.growing = true;
    }
    fill(circle.col);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  }
}