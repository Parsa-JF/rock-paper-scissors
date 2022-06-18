function computerPlay()
{
    options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playround(playerSelection, computerSelection)
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


let input = " "
while(input!= "Q")
{
    input = prompt("Welcome to Rock, paper Scissors! Enter your weapon or \"q\" to quit.");
    console.log("HINT: computer chose " +computer)
    computer = computerPlay();
    result = playround(input, computer);
    console.log(result);
}
