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