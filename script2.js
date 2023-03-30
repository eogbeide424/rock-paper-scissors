var wins = 0;
var ties = 0;
var loses = 0;
var rps = ["R", "P", "S"];

// User input function
function userInput() {
    var input = window.prompt("Enter R, P, S:").toUpperCase();

    if (!rps.includes(input)) {
        window.alert("Invalid Entry");
        return false;
    } else {
        return input;
    }
}

function computerChoice() {
    var index = Math.floor(Math.random() * rps.length);
    return rps[index];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties++;
        return "It's a tie!";
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        return "You win!";
    } else {
        loses++;
        return "You lose!";
    }
}

// Play again loop
var playAgain;
do {
    var userChoice = userInput();
    if (userChoice) {
        var compChoice = computerChoice();
        var result = playRound(userChoice, compChoice);
        window.alert("The computer chose " + compChoice + ". " + result);

        // Ask the player if they want to play again
        playAgain = window.confirm("Do you want to play again? (OK for Yes, Cancel for No)");
    } else {
        window.alert("Please enter a valid choice (R, P, or S).");
        playAgain = true; // Prompt the user for a valid choice again
    }
} while (playAgain);

window.alert("Thanks for playing! Your results are:\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + loses);
