function computerPlay()
{
    options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection)
    {return "draw";}
    else if(playerSelection == "rock")
    {
        if (computerSelection == "paper"){return "computer wins"}
        else return "player wins"
    }
    else if(playerSelection == "paper")
    {
        if (computerSelection == "scissors"){return "computer wins"}
        else return "player wins"
    }
    else if (playerSelection == "scissors")
    {
        if (computerSelection == "rock"){return "computer wins"}
        else return "player wins"
    }
    else return "invalid input";
}

let result = ""
playerScore = 0;
computerScore = 0;
const r = document.querySelector('#r');
const p = document.querySelector('#p');
const s = document.querySelector('#s');
const winner = document.querySelector('#winner');

function updateScore(pScore, cScore)
{
    const score = document.querySelector('#score');
    score.textContent = "Score: "+pScore+"-"+cScore;
}



    r.addEventListener('click', () => 
    {
        computer = computerPlay();
        console.log("computer chose " +computer);
        result = playRound("rock", computer);
  
        if(result == "computer wins")
        {
            computerScore++;
        }
        else if(result == "player wins")
        {
            playerScore++;
        }
        updateScore(playerScore, computerScore);

        if(computerScore == 5)
        {
            playerScore = 0;
            computerScore = 0;
            winner.textContent = "Computer Wins!"
        }
        if(playerScore == 5)
        {
            playerScore = 0;
            computerScore = 0;
            winner.textContent = "Player Wins!"
        }
    });

    p.addEventListener('click', () => 
    {
        computer = computerPlay();
        console.log("computer chose " +computer);
        result = playRound("paper", computer);

        if(result == "computer wins")
        {
            computerScore++;
        }
        else if(result == "player wins")
        {
            playerScore++;
        }
        updateScore(playerScore, computerScore);

        if(computerScore == 5)
        {
            playerScore = 0;
            computerScore = 0;
            winner.textContent = "Computer Wins!"
        }
        if(playerScore == 5)
        {
            playerScore = 0;
            computerScore = 0;
            winner.textContent = "Player Wins!"
        }

        
    });

    s.addEventListener('click', () => 
    {
        computer = computerPlay();
        console.log("computer chose " +computer);
        result = playRound("scissors", computer);

        if(result == "computer wins")
        {
            computerScore++;
        }
        else if(result == "player wins")
        {
            playerScore++;
        }
        updateScore(playerScore, computerScore);

        if(computerScore == 5)
        {
            playerScore = 0;
            computerScore = 0;
            winner.textContent = "Computer Wins!"
        }
        if(playerScore == 5)
        {
            playerScore = 0;
            computerScore = 0;
            winner.textContent = "Player Wins!"
        }
    });

 

    

