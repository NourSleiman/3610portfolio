let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//background color
ctx.fillStyle = "#000038";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//moon
ctx.fillStyle = "#d4d4d4";
ctx.strokeStyle = "#d4d4d4";
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//four-pointed star
function drawStar(xpos, ypos) {
  ctx.fillStyle = "#fff4f3";
  ctx.strokeStyle = "#fff4f3";
  ctx.beginPath();
  ctx.arc(xpos, ypos, 10, 0.5 * Math.PI, 0, true);
  ctx.stroke();
  ctx.arc(xpos + 20, ypos, 10, Math.PI, 0.5 * Math.PI, true);
  ctx.stroke();
  ctx.arc(xpos + 20, ypos + 20, 10, 1.5 * Math.PI, Math.PI, true);
  ctx.stroke();
  ctx.arc(xpos, ypos + 20, 10, 0, 1.5 * Math.PI, true);
  ctx.stroke();
  ctx.fill();
}

//randomly generate stars anywhere along the x-axis but only the top part of the canvas
for (let i = 0; i < 20; i++) {
  drawStar(Math.random() * 700, Math.random() * 200);
}

//ship
function drawShip(x, y) {
  ctx.beginPath();
  //hull
  ctx.fillStyle = "#402000";
  ctx.strokeStyle = "#402000";
  ctx.ellipse(x, y, 75, 50, 2 * Math.PI, Math.PI, 0, true);
  ctx.stroke();
  ctx.fill();
  //mast
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.fillRect(x, y - 100, 5, 100);
  //sail - right side
  ctx.fillStyle = "#e67777";
  ctx.strokeStyle = "#e67777";
  ctx.beginPath();
  ctx.moveTo(x + 5, y - 25);
  ctx.lineTo(x + 50, y - 25);
  ctx.lineTo(x + 5, y - 100);
  ctx.fill();
  //sail - left side
  ctx.beginPath();
  ctx.moveTo(x, y - 25);
  ctx.lineTo(x - 45, y - 25);
  ctx.lineTo(x, y - 100);
  ctx.fill();
}

drawShip(350, 375);

//ocean
ctx.fillStyle = "#006a94";
ctx.strokeStyle = "#006a94";
ctx.fillRect(0, 410, canvas.width, 100);
let xpos = 0;
//draw circles along the top of rectangle to look like waves in the water
for (let i = 0; i < Math.ceil(canvas.width / 10) + 1; i++) {
  ctx.beginPath();
  ctx.arc(xpos, 415, 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  xpos += 10;
}

ctx.fillStyle = "#ebeb81";
ctx.textAlign = "center";
ctx.font = "bold 36px Courier New";
ctx.fillText("Come Sail Along!", canvas.width / 2, 100);
