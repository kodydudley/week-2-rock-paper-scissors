let computerChoices = ['rock', 'paper', 'scissors']

function play(playerChoice) {
  let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  if (playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper' || playerChoice === 'rock' && computerChoice === 'scissors') {
    drawWin()
  } else if (playerChoice === 'scissors' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors') {
    drawLose()
  } else if (playerChoice === computerChoice) {
    drawTie()
  }
}

function drawWin() {
  let winningMessage = '<h2 class="bg-success">You Win <i class="fa fa-thumbs-up ml-3" id="winImg" aria-hidden="true"></i></h2>'
  let winImgElem = document.getElementById("result")
  winImgElem.innerHTML = `${winningMessage}`
}

function drawLose() {
  let loseMessage = '<h2 class="bg-danger">You Lose <i class="fa fa-thumbs-down ml-3" id="loseImg" aria-hidden="true"></i>'
  let loseImgElem = document.getElementById("result")
  loseImgElem.innerHTML = `${loseMessage}`
}

function drawTie() {
  let tieMessage = '<h2 class="bg-warning">You Tie, Try Again!</h2>'
  let tieImgElem = document.getElementById("result")
  tieImgElem.innerHTML = `${tieMessage}`
}