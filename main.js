let playerScore = 0
let computerScore = 0
let choices = ['rock', 'paper', 'scissors']

const btns = document.querySelectorAll('div#container .btn');
const container = document.getElementById('container');

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}


function removeButtons() {
    btns.forEach(elem => {
        elem.remove();
    })
}


let reloadBtn = document.getElementById("reloadBtn");
        reloadBtn.addEventListener("click", () => {
            location.reload();
        })
        

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br><font color="FFFFFF">YOU WON THE GAME!</font>'
            removeButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br><font color="FFFFFF">THE COMPUTER WON THE GAME!</font>'
            removeButtons();
        }
    }

    document.querySelector("#result").innerHTML = result
    return
}

btns.forEach(btn =>{
    btn.addEventListener('click', function(){
        playRound(btn.value)
    })
})




