console.log("Welcome to Rock, Paper, Scissors!");
console.log("");

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    let choice;

    if (number === 0) {
        choice = "rock";
    } else if (number === 1) {
        choice = "paper";
    } else if (number === 2) {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    const choice = prompt("Please enter 'rock', 'paper', or 'scissors':");

    // if (
    //     !choice ||
    //     !["rock", "paper", "scissors"].includes(choice.toLowerCase())
    // ) {
    //     console.log("Invalid choice. Please try again.");
    //     return getHumanChoice();
    // }

    return choice.toLowerCase();
}

function playGame() {
    let rounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`${humanChoice} beats ${computerChoice}. You win!`);
            humanScore++;
        } else {
            console.log(
                `${computerChoice} beats ${humanChoice}. Computer wins!`
            );
            computerScore++;
        }

        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    for (let i = 1; i <= rounds; i++) {
        console.log(`--- Round ${i} ---`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("");
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
