function main() {
  let p1 = 'p1'
  let p2 = 'p2'
  // handles if player1 selects rock
  const selectRockP1 = document.querySelector('.player1 .rock')
  function clickRockP1() {
    const player1Choice = document.querySelector('.player1 h3')
    player1Choice.textContent = 'ROCK'
    p1 = 'ROCK'
  }
  selectRockP1.addEventListener('click', clickRockP1)
  // handles if player1 selects paper
  const selectPaperP1 = document.querySelector('.player1 .paper')
  function clickPaperP1() {
    const player1Choice = document.querySelector('.player1 h3')
    player1Choice.textContent = 'PAPER'
    p1 = 'PAPER'
  }
  selectPaperP1.addEventListener('click', clickPaperP1)
  // handles if player1 selects scissor
  const selectScissorsP1 = document.querySelector('.player1 .scissors')
  function clickScissorsP1() {
    const player1Choice = document.querySelector('.player1 h3')
    player1Choice.textContent = 'SCISSORS'
    p1 = 'SCISSORS'
  }
  selectScissorsP1.addEventListener('click', clickScissorsP1)
  // handles if player1 selects lizard
  const selectLizardP1 = document.querySelector('.player1 .lizard')
  function clickLizardP1() {
    const player1Choice = document.querySelector('.player1 h3')
    player1Choice.textContent = 'LIZARD'
    p1 = 'LIZARD'
  }
  selectLizardP1.addEventListener('click', clickLizardP1)
  // handles if player1 selects spock
  const selectSpockP1 = document.querySelector('.player1 .spock')
  function clickSpockP1() {
    const player1Choice = document.querySelector('.player1 h3')
    player1Choice.textContent = 'SPOCK'
    p1 = 'SPOCK'
  }
  selectSpockP1.addEventListener('click', clickSpockP1)
  // player2--------------------------------------------------------
  // handles if player2 selects rock
  const selectRockP2 = document.querySelector('.player2 .rock')
  function clickRockP2() {
    const player2Choice = document.querySelector('.player2 h3')
    player2Choice.textContent = 'ROCK'
    p2 = 'ROCK'
    runGame()
  }
  selectRockP2.addEventListener('click', clickRockP2)

  // handles if player2 selects paper
  const selectPaperP2 = document.querySelector('.player2 .paper')
  function clickPaperP2() {
    const player2Choice = document.querySelector('.player2 h3')
    player2Choice.textContent = 'PAPER'
    p2 = 'PAPER'
    runGame()
  }
  selectPaperP2.addEventListener('click', clickPaperP2)
  // handles if player2 selects scissor
  const selectScissorsP2 = document.querySelector('.player2 .scissors')
  function clickScissorsP2() {
    const player2Choice = document.querySelector('.player2 h3')
    player2Choice.textContent = 'SCISSORS'
    p2 = 'SCISSORS'
    runGame()
  }
  selectScissorsP2.addEventListener('click', clickScissorsP2)

  // handles if player2 selects lizard
  const selectLizardP2 = document.querySelector('.player2 .lizard')
  function clickLizardP2() {
    const player2Choice = document.querySelector('.player2 h3')
    player2Choice.textContent = 'LIZARD'
    p2 = 'LIZARD'
    runGame()
  }
  selectLizardP2.addEventListener('click', clickLizardP2)

  // handles if player2 selects spock
  const selectSpockP2 = document.querySelector('.player2 .spock')
  function clickSpockP2() {
    const player2Choice = document.querySelector('.player2 h3')
    player2Choice.textContent = 'SPOCK'
    p2 = 'SPOCK'
    runGame()
  }
  selectSpockP2.addEventListener('click', clickSpockP2)

  // set up logic to determine which player has the better hand
  function runGame() {
    if (p1 === p2) {
      window.alert('Draw!')
    } else if (
      (p1 === 'ROCK' && p2 === 'SCISSORS') ||
      (p1 === 'SCISSORS' && p2 === 'PAPER') ||
      (p1 === 'PAPER' && p2 === 'ROCK') ||
      (p1 === 'ROCK' && p2 === 'LIZARD') ||
      (p1 === 'LIZARD' && p2 === 'SPOCK') ||
      (p1 === 'SPOCK' && p2 === 'SCISSORS') ||
      (p1 === 'SCISSORS' && p2 === 'LIZARD') ||
      (p1 === 'LIZARD' && p2 === 'PAPER') ||
      (p1 === 'PAPER' && p2 === 'SPOCK') ||
      (p1 === 'SPOCK' && p2 === 'ROCK')
    ) {
      window.alert(`Player 1 won!\n${p1} beats ${p2}`)
    } else {
      window.alert(`Player 2 won!\n${p2} beats ${p1}`)
    }
  }
  // setup reset button
  function resetHands() {
    let player1Choice = document.querySelector('.player1 h3')
    player1Choice.textContent = 'Your move'
    let player2Choice = document.querySelector('.player2 h3')
    player2Choice.textContent = 'Your move'
  }
  document.querySelector('button').addEventListener('click', resetHands)

  function rules() {
    window.alert(
      ' Scissors cuts Paper \n Paper covers Rock \n Rock crushes Lizard \n Lizard poisons Spock \n Spock smashes Scissors \n Scissors decapitates Lizard \n Lizard eats Paper \n Paper disproves Spock \n Spock vaporizes Rock \n Rock crushes Scissors'
    )
  }
  document.querySelector('.rules').addEventListener('click', rules)
}

document.addEventListener('DOMContentLoaded', main)
