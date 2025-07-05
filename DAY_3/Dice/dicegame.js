let scores1 = 0;
let scores2 = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let autoRollInterval;

function updateCurrentScore() {
  document.getElementById(`current${activePlayer + 1}`).textContent = currentScore;
}

function updateScore() {
  document.getElementById(`score${activePlayer + 1}`).textContent = activePlayer === 0 ? scores1 : scores2;
}

function switchPlayer() {
  document.getElementById(`current${activePlayer + 1}`).textContent = 0;
  document.getElementById(`part${activePlayer + 1}`).classList.remove('active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById(`part${activePlayer + 1}`).classList.add('active');
}

function rollDice() {
  if (!playing) return;

  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice').src = `images/dice${dice}.jpg`;

  if (dice !== 1) {
    currentScore += dice;
    updateCurrentScore();
  } else {
    switchPlayer();
  }
}

function holdScore() {
  if (!playing) return;

  switch (activePlayer) {
    case 0:
      scores1 += currentScore;
      break;
    case 1:
      scores2 += currentScore;
      break;
  }
  updateScore();

  if ((activePlayer === 0 && scores1 >= 100) || (activePlayer === 1 && scores2 >= 100)) {
    playing = false;
    clearInterval(autoRollInterval);
    alert(`Player ${activePlayer + 1} wins!`);
  } else {
    switchPlayer();
  }
}

function newGame() {
  scores1 = 0;
  scores2 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  document.getElementById('score1').textContent = 0;
  document.getElementById('score2').textContent = 0;
  document.getElementById('current1').textContent = 0;
  document.getElementById('current2').textContent = 0;

  document.getElementById('part1').classList.add('active');
  document.getElementById('part2').classList.remove('active');

  document.getElementById('dice').src = 'images/dice1.jpg';

  clearInterval(autoRollInterval);
  autoRollInterval = setInterval(rollDice, 3000);
}


document.getElementById('dice').src = 'images/dice1.jpg';
autoRollInterval = setInterval(rollDice, 3000);
