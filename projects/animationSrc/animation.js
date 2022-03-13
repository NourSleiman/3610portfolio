"use strict";

var Scene = {
  canvas: undefined,
  canvasContext: undefined,
  sprite: undefined,
};

let detective = new Image();
detective.src = "./animationSrc/detective.png";

Scene.start = function () {
  // Get the canvas and it's context.
  Scene.canvas = document.getElementById("myCanvas");
  Scene.canvasContext = Scene.canvas.getContext("2d");

  // Setup the cat to be displayed.
  Scene.sprite = balloonCat;

  // Attach the image to be used for the sprite.
  Scene.sprite.img = new Image();
  Scene.sprite.img.src = Scene.sprite.src;

  // Wait till the cat image is loaded before starting the animation.
  Scene.sprite.img.onload = function () {
    Scene.sprite.offset = 0;
    Scene.mainLoop();
  };
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener("DOMContentLoaded", Scene.start);

Scene.clearCanvas = function () {
  Scene.canvasContext.fillStyle = "#91e7f7";
  Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

let i = 0;
let j = 0;

Scene.mainLoop = function () {
  Scene.clearCanvas();
  Scene.update();
  Scene.draw();

  Scene.canvasContext.drawImage(detective, 50, 350);

  drawBubble(Scene.canvasContext, 625, 200, 55);
  drawRectangle(Scene.canvasContext, 190, 375, 200, 50);
  dialogue(590, 200);

  // Animate at 24 frames a second.
  window.setTimeout(Scene.mainLoop, 1000 / 24);
};

Scene.update = function () {
  Scene.canvas.width = window.innerWidth;

  // Set the location of the next frame.
  Scene.sprite.offset = 550;
};

Scene.draw = function () {
  Scene.canvasContext.drawImage(
    Scene.sprite.img,
    Scene.sprite.frames[Scene.sprite.frame].frame.x,
    Scene.sprite.frames[Scene.sprite.frame].frame.y,
    Scene.sprite.frames[Scene.sprite.frame].frame.w,
    Scene.sprite.frames[Scene.sprite.frame].frame.h,
    Scene.sprite.offset,
    0,
    Scene.sprite.frames[Scene.sprite.frame].frame.w,
    Scene.sprite.frames[Scene.sprite.frame].frame.h
  );

  // Advance to the next frame.
  Scene.sprite.frame++;

  if (Scene.sprite.frame == 50) {
    Scene.sprite.frame = 0;
    i++;
    j++;
    if (i > 9) {
      i = 0;
    }
    if (j > 9) {
      j = 0;
    }
  }
};

function drawBubble(screen, x, y, size) {
  screen.fillStyle = "white";
  screen.strokeStyle = "white";
  screen.beginPath();
  screen.arc(x, y, size, 0.45 * Math.PI, 0.17 * Math.PI);
  screen.moveTo(x + size - 10, y + size / 2);
  screen.lineTo(x + size + 15, y + size);
  screen.lineTo(x, y + size);
  screen.lineTo(x + size - 10, y + size / 2);
  screen.stroke();
  screen.fill();
}

function drawRectangle(ctx, x, y, width, length) {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.rect(x, y, width, length);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x, y + length - 10);
  ctx.lineTo(x - 10, y + length + 5);
  ctx.lineTo(x + 10, y + length);
  ctx.lineTo(x, y + length - 10);
  ctx.stroke();
  ctx.fill();
}

function dialogue(catX, humanX) {
  let catDialogue = [
    "",
    "Meow!",
    "",
    "I don't know",
    "",
    "Of course...meow",
    "",
    "Sure...meow",
    "",
    "Cool...meow",
  ];
  let humanDialogue = [
    "Holy cow, that's a big cat!",
    "",
    "I wonder how it's floating there?",
    "",
    "You can speak?!",
    "",
    "Must be my imagination",
    "",
    "I'll stay longer to find out",
    "",
  ];

  Scene.canvasContext.fillStyle = "black";
  Scene.canvasContext.font = "15px Lato";
  Scene.canvasContext.fillText(catDialogue[i], catX, 200);

  Scene.canvasContext.fillStyle = "black";
  Scene.canvasContext.font = "15px Lato";
  Scene.canvasContext.fillText(humanDialogue[j], humanX, 400);
}
