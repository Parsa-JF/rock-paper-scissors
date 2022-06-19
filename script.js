var result = ""
var playerScore = 0;
var computerScore = 0;
var roundWinner = "";

function computerPlay()
{
    options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == playerSelection)
    { 
        computerScore+=0;
        playerScore+=0;
        roundWinner = "Draw!";
    }
    else if (playerSelection == "rock")
    {
        if (computerSelection == "paper"){computerScore++; roundWinner = "Computer Won!";}
        else {playerScore++; roundWinner = "Player Won!";}
    }
    else if(playerSelection == "paper")
    {
        if (computerSelection == "scissors"){computerScore++; roundWinner = "Computer Won!";}
        else {playerScore++; roundWinner = "Player Won!";}
    }
    else if (playerSelection == "scissors")
    {
        if (computerSelection == "rock"){computerScore++; roundWinner = "Computer Won!";}
        else {playerScore++; roundWinner = "Player Won!";}
    }

}


const r = document.querySelector('#r');
const p = document.querySelector('#p');
const s = document.querySelector('#s');
const ROUNDWINNER = document.querySelector('#roundWinner');


function displayRoundWinner()
{
    ROUNDWINNER.textContent = roundWinner; 
}


function updateScore(pScore, cScore)
{
    const score = document.querySelector('#score');
    score.textContent = "Score: "+pScore+"-"+cScore;
}

function resetGame()
{
    if((playerScore==5) || computerScore == 5)
    {
        playerScore = 0;
        computerScore = 0;
    }
}

function executeButton(playerInput)
{
    computerInput = computerPlay();
    playRound(playerInput, computerInput);
    updateScore(playerScore, computerScore);
    console.log("you chose " +playerInput+ " and computer chose " + computerInput)
    resetGame();
    displayRoundWinner();
}





r.addEventListener('click', () => 
{
    executeButton("rock");
});

p.addEventListener('click', () => 
{
    executeButton("paper");
});

s.addEventListener('click', () => 
{
    executeButton("scissors");
});

 

    

