// Player choice
let playerPlay;

// Player score
let playerScore = 0;
// Computer score
let compScore = 0;

function computerPlay() {

    let ranNum = Math.floor(Math.random() * 3);
    if (ranNum == 0) {
        return ("rock");
    }
    else if (ranNum == 1) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

// Single round
function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerPlay;
    computerSelection = computerPlay();

    pc.textContent = "Player Choice: " + playerSelection;
    cc.textContent = "Computer Choice: " + computerSelection;

    
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return ("You Win! Paper beats Rock.");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        compScore++;
        return ("You lose! Scissors beat Paper.");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        compScore++;
        return ("You Lose! Paper beats Rock.");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return ("You Win! Rock beats Scissors.");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        compScore++;
        return ("You Lose! Rock beats Scissors.");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return ("You Win! Scissors beats Paper.");
    }
    else if (playerSelection == computerSelection) {
        return ("It's a Draw!");
    }
};

// Multiple rounds
function game() {
  

    main.textContent = playRound();
    ps.textContent = "Player: " + playerScore;
    cs.textContent = "Computer: " + compScore;

    if (playerScore == 5) {

        main.textContent = "Game over, you Won! " + playerScore + ":" + compScore;
        playerScore = 0;
        compScore = 0;
        ps.textContent = "Player: " + playerScore;
        cs.textContent = "Computer: " + compScore;
    }
    else if (compScore == 5) {

        main.textContent = "Game over, you Lost! " + playerScore + ":" + compScore;
        playerScore = 0;
        compScore = 0;
        ps.textContent = "Player: " + playerScore;
        cs.textContent = "Computer: " + compScore;
    }
};


rock.addEventListener('click', function (e) {

    playerPlay = "rock"
    game();
});

paper.addEventListener('click', function (e) {

    playerPlay = "paper"
    game();
});

scissors.addEventListener('click', function (e) {

    playerPlay = "scissors"
    game();
});