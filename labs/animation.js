"use strict";

var Scene = {
  canvas: undefined,
  canvasContext: undefined,
  sprite: undefined,
};

Scene.start = function () {
  // Get the canvas and it's context.
  Scene.canvas = document.getElementById("myCanvas");
  Scene.canvasContext = Scene.canvas.getContext("2d");

  // Setup the numbers to be displayed.
  Scene.sprite = numbers;

  // Attach the image to be used for the sprite.
  Scene.sprite.img = new Image();
  Scene.sprite.img.src = Scene.sprite.src;

  // Wait till the number images are loaded before starting the animation.
  Scene.sprite.img.onload = function () {
    Scene.sprite.offset = 0;
    document.getElementById("starting").hidden = true;
    Scene.sprite.frame = 0;
    Scene.mainLoop();
  };
};

Scene.clearCanvas = function () {
  Scene.canvasContext.fillStyle = "white";
  Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function () {
  Scene.clearCanvas();
  Scene.update();
  Scene.draw();
  console.log("called");

  // Animate at 500ms.
  if (Scene.sprite.frame != 11) {
    window.setTimeout(Scene.mainLoop, 500);
  }
};

Scene.update = function () {
  // Set the location of the next frame.
  Scene.sprite.offset = 0;
};

Scene.draw = function () {
  if (Scene.sprite.frame < 10) {
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
  }
  // At the end of the sprite sheet, print 1 and 0
  else if (Scene.sprite.frame == Scene.sprite.frames.length) {
    Scene.canvasContext.drawImage(
      Scene.sprite.img,
      Scene.sprite.frames[1].frame.x,
      Scene.sprite.frames[1].frame.y,
      Scene.sprite.frames[1].frame.w,
      Scene.sprite.frames[1].frame.h,
      0,
      0,
      Scene.sprite.frames[1].frame.w,
      Scene.sprite.frames[1].frame.h
    );

    Scene.canvasContext.drawImage(
      Scene.sprite.img,
      Scene.sprite.frames[0].frame.x,
      Scene.sprite.frames[0].frame.y,
      Scene.sprite.frames[0].frame.w,
      Scene.sprite.frames[0].frame.h,
      Scene.sprite.offset + 135,
      0,
      Scene.sprite.frames[0].frame.w,
      Scene.sprite.frames[0].frame.h
    );
  }
  Scene.sprite.frame++;
};
