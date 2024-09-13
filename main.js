const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("rock");



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

// function getHumanChoice() {
//     const humanChoices = prompt("Rock, Paper, or Scissors").toLowerCase();
//     if (humanChoices === "rock") {
//         return "Rock";
//     } else if (humanChoices === "paper") {
//         return "Paper";
//     } else if (humanChoices === "scissors") {
//         return "Scissors";
//     } else {
//         return "That is not a valid answer";
//     }
// }

// function playGame() {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     let humanScore = 0;
//     let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            return 'You win!';
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            return 'You win!';
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            return 'You win!';
        } else {
            computerScore++;
            return 'You lose!';
        }

        rock.addEventListener("click", playRound(rock, getComputerChoice()));
//     }
//     if (humanScore > computerScore) {
//         console.log("You are the winner!");
//     } else if (humanScore < computerScore) {
//         console.log("The computer is the winner!");
//     } else {
//         console.log("You tied with the computer!");
//     }
// }

// playGame();








