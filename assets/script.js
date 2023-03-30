var wins = 0;
var losses = 0;
var ties = 0;
var rps = ['r','p','s'];

//ask the user which option they want to select
var validInput = false;
var playAgain = true;

do {
    validInput = false;
    do {
        var playerChoice = prompt("Enter R, P, or S").toLowerCase();
    if (playerChoice === 'r' || playerChoice === 'p' || playerChoice === 's') {
        validInput = true;
    } else {
        alert("Not a valid input. Please enter R, P, or S.");
    }
    } while(!validInput)

    //computer picks value between 0 and 2, and uses as index for selecting from rps array
    
    var compChoice = rps[(Math.floor(Math.random() * 3))];
    
    alert("The computer picked: " + compChoice.toUpperCase());

    // logic to rock paper scissors 
    
    switch(playerChoice) {
        case 'r':
            switch(compChoice) {
                case 'r':
                    ties++;
                    alert("You tied!");
                    break;
                case 'p':
                    losses++;
                    alert("You lost :(");
                    break;
                case 's':
                    wins++;
                    alert("You won! :D");
                    break;
            }
            break;
        case 'p':
            switch(compChoice) {
                case 'r':
                    wins++;
                    alert("You won! :D");
                    break;
                case 'p':
                    ties++;
                    alert("You tied!");
                    break;
                case 's':
                    losses++;
                    alert("You lost :(");
                    break;
            }
            break;
        case 's':
            switch(compChoice) {
                case 'r':
                    losses++;
                    alert("You lost :(");
                    break;
                case 'p':
                    wins++;
                    alert("You won! :D");
                    break;
                case 's':
                    ties++;
                    alert("You tied!");
                    break;
            }
    }

    alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    playAgain = confirm("Play again?");

} while(playAgain)

console.log(playerChoice);

