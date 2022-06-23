

// Variables to keep track of the user's wins, lossess, and ties
var wins = 0, losses = 0, ties = 0;

var playAgain = true;

while(playAgain) {
    // Ask user to select between R, P, or S
    var userInput = prompt("Enter R, P, or S to play");

    // If user types a different letter, prompt the game again
    if (userInput !== "R" && userInput !== "S" && userInput !== "P" && userInput !== "") {
        userInput = prompt("Please enter a valid letter. \nEnter R, P, or S to play");
    }

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
    alert("The computer chose " + compChoice);
    // Updates user's points
    if (userInput === "R" && compChoice === "S" || userInput === "S" && compChoice === "P" || userInput === "P" && compChoice === "R") {
        wins++;
    } else if (compChoice === "R" && userInput === "S" || compChoice === "S" && userInput === "P" || compChoice === "P" && userInput === "R") {
        losses++;
    } else {
        ties++;
    }
    // Alerts user about wins, losses, ties
    alert("Wins: " + wins + " \nLosses: " + losses + " \nTies: " + ties);

    var play = confirm("Play again?\nSelect OK or Cancel.");
    if (!play) {
        playAgain = false;
    }
}

alert("Game Over");