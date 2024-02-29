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

// bricks
var brickRows = 3;
var brickColumns = 5;

var brickW = 60;
var brickH = 20;

var brickPadding = 12;

var brick0SetTop = 30;
var brick0SetLeft = 100;

var bricks = [];
for (let i = 0; i < brickColumns; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickRows; j++) {
    bricks[i][j] = { x: 0, y: 0, drawBrick: false };
  }
}

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

function drawBricks() {
  for (let i = 0; i < brickColumns; i++) {
    for (let j = 0; j < brickRows; j++) {
      var brickX = (i *(brickW + brickPadding)) + brick0SetLeft;
      var brickY = (j*(brickH + brickPadding))+brick0SetTop;
      ctx.rect(brickX, brickY, brickW, brickH);
      ctx.fillStyle = "#ddd"; // paddle color
      ctx.fill();
      ctx.closePath();
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);

  drawPaddle();
  drawBall();
  drawBricks();

  if (x + dx > c.width - radius || x + dx < radius) dx = -dx;

  if (y + dy < radius) {
    dy = -dy;
  } else {
    if (y + dy > c.height - radius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        // alert("perdiste");
      }
    }
  }

  if (leftMove && paddleX > 0) paddleX -= 8;

  if (rightMove && paddleX < c.width - paddleWidth) paddleX += 8;

  x += dx;
  y += dy;
}

setInterval(draw, 10);
