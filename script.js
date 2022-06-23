// Ask user to select between R, P, or S
var userInput = prompt("Enter R, P, or S to play");

// generates random number for computer choice
var num = Math.floor(Math.random() * 3);
var compChoice;

// selects between R, P, S based off random number
if(num === 0) {
    compChoice = "R";
} else if (num === 1) {
    compChoice = "P";
} else {
    compChoice = "S";
}
console.log(compChoice);

// Variables to keep track of the user's wins, lossess, and ties
var wins = 0, losses = 0, ties = 0;
// Alerts user about wins, losses, ties
alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
// Updates user's points
if (userInput === "R" && compChoice === "S" || userInput === "S" && compChoice === "P" || userInput === "P" && compChoice === "R") {
    wins++;
} else if (compChoice === "R" && userInput === "S" || compChoice === "S" && userInput === "P" || compChoice === "P" && userInput === "R") {
    losses++;
} else {
    ties++;
}