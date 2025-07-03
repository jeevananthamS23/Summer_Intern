let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 40;
let highScore = 0;


const displayMessage = (message) => {
  document.getElementById('discon').textContent = message;
};

document.getElementById('check').addEventListener('click', function () {
  const guess = Number(document.getElementById('guess').value);

  if (!guess) {
    displayMessage(' No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('div[style*="position: absolute"]').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.getElementById('highscore').textContent = 'Highscore: ' + highScore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.getElementById('score').textContent = 'Score: ' + score;
    } else {
      displayMessage('You lost the game!');
      document.getElementById('score').textContent = 'Score: 0';
    }
  }
});

document.getElementById('button').addEventListener('click', function () {
  score = 40;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.getElementById('score').textContent = 'Score: ' + score;
  document.querySelector('div[style*="position: absolute"]').textContent = '?';
  document.getElementById('guess').value = '';
});
