var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// circle size
var radius = 10;
var x = c.width / 2;
var y = c.height - radius;

var dx = 2;
var dy = -2;

// rectangle size
var paddleX = c.width / 2;
var paddleY = c.height - 10;
var paddleWidth = 60;
var paddleHeigth = 12;

var rightMove = false;
var leftMove = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 37) {
    leftMove = true;
  } else {
    if (e.keyCode == 39) {
      rightMove = true;
    }
  }
}

function keyUpHandler(e) {
    if (e.keyCode == 37) {
        leftMove = false;
      } else {
        if (e.keyCode == 39) {
          rightMove = false;
        }
      }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#000"; // circle color
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeigth);
  ctx.fillStyle = "#ddd"; // paddle color
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);

  drawPaddle();
  drawBall();

  if (x + dx > c.width - radius || x + dx < radius) {
    dx = -dx;
  }

  if (y + dy < radius || y + dy > c.height - radius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
