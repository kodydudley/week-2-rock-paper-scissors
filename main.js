let computerChoices = ['rock', 'paper', 'scissors']
let playerPictures = {
  rock: '<img src="rock.jpg" alt="" class = "img-fluid"/>',
  paper: '<img src="paper.jpg" alt="" class = "img-fluid"/>',
  scissors: '<img src="scissors.jpg" alt="" class = "img-fluid"/>',
}

let computerPictures = {
  rock: '<img src="rock.jpg" alt="" class = "img-fluid"/>',
  paper: '<img src="paper.jpg" alt="" class = "img-fluid"/>',
  scissors: '<img src="scissors.jpg" alt="" class = "img-fluid"/>',
}

function play(playerChoice) {
  let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  drawComputerPic(computerChoice)
  drawPlayerPic(playerChoice)
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



function drawPlayerPic(input) {
  let playerPic = playerPictures[input]
  let playerPicElem = document.getElementById("playerPic")
  playerPicElem.innerHTML = `${playerPic}`
}

function drawComputerPic(comp) {
  let computerPic = computerPictures[comp]
  let computerPicElem = document.getElementById("computerPic")
  computerPicElem.innerHTML = `${computerPic}`
}