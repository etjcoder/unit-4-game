//Here we are going to create the Crystal Collector Game


//We will have 6 Variables to Start with
var computerNumber;
var userNumber = 0;
var crystal1Value;
var crystal2Value;
var crystal3Value;
var crystal4Value;

var compNumText;

var wins = 0;
var losses = 0;


// Next we will define some of the functions that we're going to need

//These are functions that will load during page load and are set for the game
// LOAD CHAIN

function compNumGenerator() {
    computerNumber = Math.floor(Math.random() * 100);
};
function crystal1NumGen () {
    crystal1Value = Math.floor(Math.random() * 12);
};
function crystal2NumGen () {
    crystal2Value = Math.floor(Math.random() * 12);
};
function crystal3NumGen () {
    crystal3Value =  Math.floor(Math.random() * 12);
};
function crystal4NumGen () {
    crystal4Value =  Math.floor(Math.random() * 12);
};

//Call initial function to get computerNumber defined
//CALL LOAD CHAIN

compNumGenerator();
crystal1NumGen();
crystal2NumGen();
crystal3NumGen();
crystal4NumGen();
console.log(computerNumber);
console.log(crystal1Value);
console.log(crystal2Value);
console.log(crystal3Value);
console.log(crystal4Value);
$("#computer-number").text("Computer: " + computerNumber);

//These are functions that react based on events that occur after the page load
//PLAY CHAIN
function userNumberTotal(c) {
    userNumber += c;
    // $("#user-number").text("Player: " + userNumber);
    console.log("I've been ran")
    console.log("user number is:" + userNumber);
    $("#user-number").text("Player: " + userNumber);
    resultDeterminer();
};

$("#jewel-1").on("click", function() {
    console.log("I've been clicked");
    console.log(crystal1Value);
    userNumberTotal(crystal1Value);
})

$("#jewel-2").on("click", function() {
    console.log("I've been clicked");
    console.log(crystal2Value);
    userNumberTotal(crystal2Value);
})

$("#jewel-3").on("click", function() {
    console.log("I've been clicked");
    console.log(crystal3Value);
    userNumberTotal(crystal3Value);
})

$("#jewel-4").on("click", function() {
    console.log("I've been clicked");
    console.log(crystal4Value);
    userNumberTotal(crystal4Value);
})


function resultDeterminer () {
    console.log("We've tested your result!")
    if (userNumber === computerNumber) {
        alert("You win!")
        endGameWin();
    } else if (userNumber > computerNumber) {
        alert("You Lost!")
        endGameLoss();
    }
};

function endGameWin () {
    wins++
    $("#wincount").text(wins);
};

function endGameLoss () {
    console.log("You've lost!")
    losses++
    $("#losscount").text(losses);
};

function reset () {

};