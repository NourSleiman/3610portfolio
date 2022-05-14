let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

recognition.lang = "en-US";
recognition.interimResults = false;

let bed = document.getElementById("bed");
let cup = document.getElementById("cup");
let bag = document.getElementById("bag");
let car = document.getElementById("car");
let book = document.getElementById("book");

ctx.font = "bold 36px sans-serif";
ctx.fillText("Instructions", 20, 50);
ctx.font = "24px sans";

let directions = [
  "Say a name of the object to see the object on the screen. ",
  "Click start to start speaking and stop when finished.",
  "Say 'HELP' to hear the instructions.",
  "Say 'ABOUT' to hear about the program.",
];
let bulletSpace = 95;
for (let i = 0; i < directions.length; i++) {
  //bullet point
  ctx.beginPath();
  ctx.arc(10, bulletSpace, 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.fillText(directions[i], 20, bulletSpace + 5);

  bulletSpace += 50;
}

let helpAudio =
  "Say a name of the object to see the object on the screen. Say 'ABOUT' to hear about the program.";
let aboutAudio = "Nour Sleiman, copyright 2022.";

ctx.font = "bold 24px sans-serif";
ctx.fillText("Bed", 20, 325);
ctx.fillText("Cup", 195, 325);
ctx.fillText("Bag", 370, 325);
ctx.fillText("Car", 545, 325);
ctx.fillText("Book", 720, 325);

let btn = document.getElementById("speak");

btn.addEventListener("click", () => {
  if (btn.innerText == "Speak") {
    btn.innerText = "Stop";
    ctx.clearRect(300, 350, 300, 375);
    recognition.start();
  } else {
    btn.innerText = "Speak";
    recognition.stop();
  }
});

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
};
recognition.onresult = function (event) {
  let message = event.results[0][0].transcript;
  if (message === "bed") {
    ctx.drawImage(bed, 300, 400, 200, 200);
  } else if (message === "cup") {
    ctx.drawImage(cup, 300, 400, 200, 200);
  } else if (message === "bag") {
    ctx.drawImage(bag, 300, 400, 200, 250);
  } else if (message === "car") {
    ctx.drawImage(car, 300, 400, 300, 200);
  } else if (message === "book") {
    ctx.drawImage(book, 300, 400, 200, 200);
  } else if (message === "help") {
    speak(helpAudio);
  } else if (message === "about") {
    speak(aboutAudio);
  } else {
    //unrecognizable speech or unknown object
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("Not recognizable", 300, 400);
  }
};
