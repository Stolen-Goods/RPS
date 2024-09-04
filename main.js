let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const computerAnswer = Math.floor(Math.random()*computerChoices.length);
    if (computerAnswer === 0) {
        return "Rock";
    } else if (computerAnswer === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const humanChoices = prompt("Rock, Paper, or Scissors").toLowerCase();
    if (humanChoices === "rock") {
        return "Rock";
    } else if (humanChoices === "paper") {
        return "Paper";
    } else if (humanChoices === "scissors") {
        return "Scissors";
    } else {
        console.log("That is not a valid answer");
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log('You win!');
        // return humanScore += 1; 
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log('You lose!');
        // return computerScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log('You win!');
        // return humanScore += 1;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log('You lose!');
        // return computerScore += 1;
    } else if (humanChoice == "Rock" && computerChoice === "Scissors") {
        console.log('You win!');
        // return humanScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log('You lose!');
        // return computerScore += 1;
    } else {
        console.log("It's a tie!");
    }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);





