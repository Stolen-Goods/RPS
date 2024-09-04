function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const computerAnswer = Math.floor(Math.random()*computerChoices.length);
    if (computerAnswer == 0) {
        return "Rock";
    } else if (computerAnswer == 1) {
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




