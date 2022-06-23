function mySwitch(myProp) {
  switch (myProp) {
    case "w":
      var snd = new Audio("./sounds/tom-1.mp3"); // buffers automatically when created
      snd.play();
      break;
    case "a":
      var snd = new Audio("./sounds/tom-2.mp3"); // buffers automatically when created
      snd.play();
      break;
    case "s":
      var snd = new Audio("./sounds/tom-3.mp3"); // buffers automatically when created
      snd.play();
      break;
    case "d":
      var snd = new Audio("./sounds/tom-4.mp3"); // buffers automatically when created
      snd.play();
      break;
    case "j":
      var snd = new Audio("./sounds/snare.mp3"); // buffers automatically when created
      snd.play();
      break;
    case "k":
      var snd = new Audio("./sounds/crash.mp3"); // buffers automatically when created
      snd.play();
      break;
    case "l":
      var snd = new Audio("./sounds/kick-bass.mp3"); // buffers automatically when created
      snd.play();
      break;

    default:
      break;
  }

  var numDrums = document.querySelectorAll(".drum").length;
  for (var i = 0; i < numDrums; i++) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        mySwitch(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
      });
  }
}

document.addEventListener("keydown", function (event) {
  mySwitch(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(myProp) {
  var activeBtn = document.querySelector("." + myProp);
  activeBtn.classList.add("pressed");

  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
}
