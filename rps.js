// Scenarios
// A: Paper beats rock
let a = "Paper beats Rock";
// B: Rock beats scissors
let b = "Rock beats Scissors";
// C: Scissors beats paper
let c = "Scissors beats Paper";

// If player wins
let d = "You Win!";
// If player lose
let e = "You Lose!";
// If draw
let f = "It's a Draw!";

// Player score
let g = 0;
// Computer score
let h = 0;

function playerSelection() {
    
    // let x = window.prompt("Rock, Paper or Scissors?:");
    // let player_input = x.toLowerCase();
    // return player_input;
    return ("rock")
}

function computerSelection() {

    // Generate 3 random numbers and assign them to either rock, paper or scissors
    let y = Math.floor(Math.random() * 3);
    
    if (y == 0)
    {
        return ("rock");
    }

    else if (y == 1)
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
    
    if (playerSelection == "paper" && computerSelection == "rock")
    {
        g++;
        return(d + " " + a);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        h++;
        return(e + " " + c);
    }
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        h++;
        return(e + " " + a);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {
        g++;
        return(d + " " + b);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        h++;
        return(e + " " + b);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        g++;
        return(d + " " + c);
    }
    else (playerSelection == computerSelection)
    {
        return f;
    }
}

// Multiple rounds
function game(playRound) {

    for(let i = 0; i < 5; i++)
    {
        console.log(playRound());
    }
    if (g > h)
    {
        console.log(d + " Score is " + g + ":" + h);
    }
    else if (g < h)
    {
        console.log(e + " Score is " + g + ":" + h);
    }
    else
    {
        return ("It's a Draw");
    }
}

game(playRound)