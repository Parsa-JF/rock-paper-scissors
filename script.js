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




    const r = document.querySelector('#r');
    const p = document.querySelector('#p');
    const s = document.querySelector('#s');

    r.addEventListener('click', () => 
    {
        computer = computerPlay();
        console.log("computer chose " +computer)
        result = playRound("rock", computer)
        console.log (result);
    });

    p.addEventListener('click', () => 
    {
        computer = computerPlay();
        console.log("computer chose " +computer)
        result = playRound("paper", computer)
        console.log (result);
    });

    s.addEventListener('click', () => 
    {
        computer = computerPlay();
        console.log("computer chose " +computer)
        result = playRound("scissors", computer)
        console.log (result);
    });