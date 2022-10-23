//* VARIÁVEIS GLOBAIS
const boardRegions = document.querySelectorAll("#board div.square")
const gameButton = document.getElementById("gameButton")
const [xIcon, circleIcon] = ['ph-x-bold','ph-circle-bold']
const filledSquares = [xIcon]
const setOfThree = []

let pos = filledSquares.length - 1
let vBoard = []
let winnerTag

function setBoard() {
  let playersNames = []
  let pos = 0

  if (gameButton.innerText == "start") {
    document.querySelectorAll(".player input").forEach(input => {
      playersNames.push(input.value)
      input.classList.add("hideElement")
    })

    document.querySelectorAll('.player').forEach(player => {
      const playerName = document.createElement('p')
      playerName.innerText = playersNames[pos]
      player.appendChild(playerName)
      pos++
    })
  }
  
  gameButton.innerText = "restart"

  gameInitialization()
}

function cleanBoard() {
  document.querySelectorAll(".player").forEach(player => {
    if (player.className.includes("turnPlayer")){
      player.classList.remove("turnPlayer")
      player.classList.remove("winner")
    }
  })

  document.querySelectorAll(".player input").forEach(input => {
    input.classList.remove("hideElement")
    input.value = ""
  })

  document.querySelectorAll(".player p").forEach(pElement => {
    pElement.remove()
  })

  document.querySelectorAll(".player .ph-confetti").forEach(icon => {
    icon.remove()
  })

  boardRegions.forEach(square => {
    disableSquare(square)
    square.childNodes.forEach(icon => icon.remove())
    square.classList.remove("isMatch")
  })

  gameButton.innerText = "start"
}

function gameInitialization() {
  vBoard = [['', '', ''],['', '', ''],['', '', '']]

  boardRegions.forEach(square => {
    square.classList.add('cursorPointer')
    square.addEventListener('click', handleBoardClick)
  })
}

function getMatchedSquares() {
  const matchedSquares = []
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    matchedSquares.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    matchedSquares.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    matchedSquares.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    matchedSquares.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    matchedSquares.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    matchedSquares.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    matchedSquares.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    matchedSquares.push("0.2", "1.1", "2.0")
  return matchedSquares
}

function disableSquare(square) {
  square.classList.remove('cursorPointer')
  square.removeEventListener('click', handleBoardClick)
}

function handleMatches(matchedSquares) {  
  matchedSquares.forEach(match => {
    document.querySelector(`[data-square="${match}"]`).classList.add('isMatch')
    setOfThree.push(match)
  })  
  
  if (setOfThree.length === 3) {
    boardRegions.forEach(square => disableSquare(square) )
    getWinner()
  } 
}

function handleBoardClick(event) {
  const square = event.currentTarget
  const vSquare = square.dataset.square
  const rowColumnPair = vSquare.split('.')
  const [row, column] = rowColumnPair
  
  const iconElement = document.createElement("i")
  
  if (filledSquares[pos] === xIcon) {
    filledSquares.push( circleIcon )
    iconElement.classList.add(xIcon)
    vBoard[row][column] = 'xIcon'
  }
  
  if (filledSquares[pos] === circleIcon) {
    filledSquares.push(xIcon)
    iconElement.classList.add(circleIcon)
    vBoard[row][column] = 'circle'
  }

  square.append(iconElement)

  turnPlayer()
  disableSquare(square)
  
  const matchedSquares = getMatchedSquares()
  if (matchedSquares.length > 0) {
    handleMatches(matchedSquares)
  }

  
  return pos++
}

function turnPlayer() {
  const lastIcon = filledSquares[pos]

  const firstXIcon = document.querySelector('.ph-x-bold')
  const firstCircleIcon = document.querySelector('.ph-circle-bold')

  if (lastIcon === firstXIcon.className) {
    firstXIcon.parentElement.classList.add('turnPlayer')
    firstCircleIcon.parentElement.classList.remove('turnPlayer')
    winnerTag = firstXIcon.parentElement
    
  }
  
  if (lastIcon === firstCircleIcon.className) {
    firstCircleIcon.parentElement.classList.add('turnPlayer')
    firstXIcon.parentElement.classList.remove('turnPlayer')
    winnerTag = firstCircleIcon.parentElement
  }
  
}

function handleClick () {
  gameButton.innerText === 'start' ? setBoard() : cleanBoard()
}

function getWinner() {
  const winnerIcon = document.createElement('i')
  winnerIcon.classList.add('ph-confetti')

  winnerTag.append(winnerIcon)
  winnerTag.classList.add('winner')
}

gameButton.addEventListener('click', handleClick )