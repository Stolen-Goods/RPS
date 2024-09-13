const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const human = document.getElementById("human-score");
const computer = document.getElementById("computer-score");
const winning = document.getElementById("winning");
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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
    } else {
        computerScore++;
    }
}    

rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    human.textContent = `Your score is: ${humanScore}`;
    computer.textContent = `The computer score is: ${computerScore}`;
    if (humanScore >= 5 && computerScore < 5) {
        winning.textContent = "You are the winner!";
    } else if (humanScore < 5 && computerScore >= 5) {
        winning.textContent = "The computer beats you!";
    }
});
paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
    human.textContent = `Your score is: ${humanScore}`;
    computer.textContent = `The computer score is: ${computerScore}`;
    if (humanScore >= 5 && computerScore < 5) {
        winning.textContent = "You are the winner!";
    } else if (humanScore < 5 && computerScore >= 5) {
        winning.textContent = "The computer beats you!";
    }
});
scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
    human.textContent = `Your score is: ${humanScore}`;
    computer.textContent = `The computer score is: ${computerScore}`;
    if (humanScore >= 5 && computerScore < 5) {
        winning.textContent = "You are the winner!";
    } else if (humanScore < 5 && computerScore >= 5) {
        winning.textContent = "The computer beats you!";
    }
});