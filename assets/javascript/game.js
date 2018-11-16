

//variables

var wins = 0;
var losses = 0;
var score;
var goalNumber;
var redCrystalAmount;
var blueCrystalAmount;
var greenCrystalAmount;
var colorfulCrystalAmount;



function reset() {

  score = 0;

  document.getElementById("totalScoreDisplay").innerHTML = "Your total score is " + score;


  goalNumber = Math.floor(Math.random() * 101) + 19;

  console.log(goalNumber);

  redCrystalAmount = Math.floor(Math.random() * 12) + 1;

  blueCrystalAmount = Math.floor(Math.random() * 12) + 1;

  greenCrystalAmount = Math.floor(Math.random() * 12) + 1;

  colorfulCrystalAmount = Math.floor(Math.random() * 12) + 1;

  document.getElementById("randomNumberDisplay").innerHTML = "Goal number: " + goalNumber;



}


function winOrLose() {

  document.getElementById("winsDisplay").innerHTML = "Wins: " + wins;
  document.getElementById("lossesDisplay").innerHTML = "Losses: " + losses;


}

function checkScore() {
  document.getElementById("totalScoreDisplay").innerHTML = "Your total score is " + score;
  if (score === goalNumber) {
    wins++;
    reset();
  }

  else if (score > goalNumber) {
    losses++;
    reset();

  }


}


//create a win/loss counter
$(document).ready(function () {

  reset();






  $("#redCrystal").click(function () {
    score = score + redCrystalAmount;
    console.log(score);
    checkScore();
    winOrLose();



  });

  $("#blueCrystal").click(function () {
    score = score + blueCrystalAmount;
    console.log(score);
    checkScore();
    winOrLose();

  });

  $("#greenCrystal").click(function () {
    score = score + greenCrystalAmount;
    console.log(score);
    checkScore();
    winOrLose();

  });

  $("#colorfulCrystal").click(function () {
    score = score + colorfulCrystalAmount;
    console.log(score);
    checkScore();
    winOrLose();
  });






});

