
// Player score
let playerScore = 0;
// Computer score
let compScore = 0;

function playerPlay() {
    
    while (true)
    {
        let rawInput = window.prompt("Rock, Paper or Scissors?:");
        let playerInput = rawInput.toLowerCase();
        if (rawInput == "rock" || rawInput == "paper" || rawInput == "scissors")
        {
            return playerInput;
            break;
        }
    }
}

function computerPlay() {

    let ranNum = Math.floor(Math.random() * 3);
    if (ranNum == 0)
    {
        return ("rock");
    }
    else if (ranNum == 1)
    {
        return ("paper");
    }
    else
    {
        return ("scissors");
    }
}

// Single round
function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    
    if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore++;
        return("You Win! Paper beats Rock.");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        compScore++;
        return("You lose! Scissors beat Paper.");
    }
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        compScore++;
        return("You Lose! Paper beats Rock.");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore++;
        return("You Win! Rock beats Scissors.");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        compScore++;
        return("You Lose! Rock beats Scissors.");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore++;
        return("You Win! Scissors beats Paper.");
    }
    else if (playerSelection == computerSelection)
    {
        return ("It's a Draw!");
    }
}

// Multiple rounds
function game() {

    for(let i = 0; i < 5; i++)
    {
        console.log(playRound());
    }
    if (playerScore > compScore)
    {
        console.log("You Win! Score is " + playerScore + ":" + compScore);
    }
    else if (playerScore < compScore)
    {
        console.log("You Lose! Score is " + playerScore + ":" + compScore);
    }
    else
    {
        console.log("It's a Draw! Score is " + playerScore + ":" + compScore);
    }
}

game(playRound);