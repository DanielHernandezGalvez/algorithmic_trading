var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// circle size
var radius = 10;
var x = c.width / 2;
var y = c.height - radius;
var dx = 2;
var dy = -2;


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#000"; // circle color
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}

function draw(){
    ctx.clearRect(0, 0, c.width, c.height);
    drawBall();
}

setInterval(draw, 10)
