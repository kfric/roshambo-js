function main() {
  // handles if player1 selects rock
  const selectRockP1 = document.querySelector('.player1 .rock')
  function clickRockP1() {
    const updateMoveP1 = document.querySelector('.player1 h3')
    updateMoveP1.textContent = 'ROCK'
  }
  selectRockP1.addEventListener('click', clickRockP1)

  // handles if player1 selects paper
  const selectPaperP1 = document.querySelector('.player1 .paper')
  function clickPaperP1() {
    const updateMoveP1 = document.querySelector('.player1 h3')
    updateMoveP1.textContent = 'PAPER'
  }
  selectPaperP1.addEventListener('click', clickPaperP1)
  // handles if player1 selects scissor
  const selectScissorsP1 = document.querySelector('.player1 .scissors')
  function clickScissorsP1() {
    const updateMoveP1 = document.querySelector('.player1 h3')
    updateMoveP1.textContent = 'SCISSORS'
  }
  selectScissorsP1.addEventListener('click', clickScissorsP1)

  // player2----------------------------------------------------------
  // handles if player2 selects rock
  const selectRockP2 = document.querySelector('.player2 .rock')
  function clickRockP2() {
    const updateMoveP2 = document.querySelector('.player2 h3')
    updateMoveP2.textContent = 'ROCK'
  }
  selectRockP2.addEventListener('click', clickRockP2)

  // handles if player2 selects paper
  const selectPaperP2 = document.querySelector('.player2 .paper')
  function clickPaperP2() {
    const updateMoveP2 = document.querySelector('.player2 h3')
    updateMoveP2.textContent = 'PAPER'
  }
  selectPaperP2.addEventListener('click', clickPaperP2)
  // handles if player2 selects scissor
  const selectScissorsP2 = document.querySelector('.player2 .scissors')
  function clickScissorsP2() {
    const updateMoveP2 = document.querySelector('.player2 h3')
    updateMoveP2.textContent = 'SCISSORS'
  }
  selectScissorsP2.addEventListener('click', clickScissorsP2)

  // set up logic to determine which player has the better hand
  // setup reset button
  function resetHands() {
    updateMoveP1 = document.querySelector('.player1 h3')
    updateMoveP1.textContent = 'Your move'
    updateMoveP2 = document.querySelector('.player2 h3')
    updateMoveP2.textContent = 'Your move'
  }
  document.querySelector('button').addEventListener('click', resetHands)
}

document.addEventListener('DOMContentLoaded', main)
