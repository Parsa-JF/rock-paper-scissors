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
const COMPUTERSELECTION = document.querySelector('#computerSelection');
const modal = document.getElementById("myModal");
const span = document.getElementById("close");
const MODAL_TEXT = document.getElementById("MODAL_TEXT");


function displayRoundWinner()
{
    ROUNDWINNER.textContent = roundWinner; 
    if(roundWinner == "Player Won!")
    {
        ROUNDWINNER.style.color = "green";
    }
    else if(roundWinner == "Draw!")
    {
        ROUNDWINNER.style.color = "yellow";
    }
    else{ ROUNDWINNER.style.color = "red"}
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
        modal.style.display = "block";
        playerScore = 0;
        computerScore = 0;
        span.onclick = function() {
            modal.style.display = "none";
          }
          if(playerScore == 5){
            MODAL_TEXT.textContent = "You Win!";
            MODAL_TEXT.style.color = 'green';
          }
          else{
            MODAL_TEXT.textContent = "You Lose!";
            MODAL_TEXT.style.color = 'red';
          }
        updateScore(0,0);
    }
}

function updateComputerIcon(computerchoice)
{
    if(computerchoice== "rock"){COMPUTERSELECTION.textContent = "✊"; }
    else if(computerchoice == "paper"){COMPUTERSELECTION.textContent ="✋"; }
    else{COMPUTERSELECTION.textContent ="✌"; }
}




function executeButton(playerInput)
{
    computerInput = computerPlay();
    updateComputerIcon(computerInput);
    playRound(playerInput, computerInput);
    updateScore(playerScore, computerScore);
    console.log("you chose " +playerInput+ " and computer chose " + computerInput);
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

 

    

