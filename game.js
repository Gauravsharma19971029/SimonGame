var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function generateRandomnColor() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  return randomChosenColour;
}

var i = 0;
var level = 1;
var started = false;

$("body").keydown(function (e) {
  if (started === false) {
    $("#level-title").html("Level " + level);
    gamePattern.push(generateRandomnColor());
    buttonAnimation(gamePattern[0]);
    started = true;
  }
});

console.log(gamePattern[i]);

$(".btn").click(function (e) {
  var clickedButton = e.target.id;
  buttonAnimation(clickedButton);
  if (clickedButton == gamePattern[i]) {
    i++;
    if (gamePattern.length === i) {
      gamePattern.push(generateRandomnColor());
      setTimeout(() => {
        level++;
        $("#level-title").html("Level " + level);
        buttonAnimation(gamePattern[i]);
        i = 0;
      }, 1000);
    }
  } else {
    i = 0;
    level = 1;
    $("body").addClass("game-over");
    $("#level-title").html("Game Over, Press Any Key to Restart");
    started = false;
    playSound("wrong");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 1000);
  }
});

function buttonAnimation(key) {
  $("." + key).addClass("pressed");

  playSound(gamePattern[i]);
  setTimeout(() => {
    $("." + key).removeClass("pressed");
  }, 500);
}

function playSound(key) {
  switch (key) {
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;

    case "blue":
      var green = new Audio("sounds/blue.mp3");
      green.play();
      break;

    case "red":
      var green = new Audio("sounds/red.mp3");
      green.play();
      break;

    case "yellow":
      var green = new Audio("sounds/yellow.mp3");
      green.play();
      break;

    default:
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      break;
  }
}
