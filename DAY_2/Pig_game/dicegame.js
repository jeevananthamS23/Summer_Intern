let scores = [0, 0];
    let currentScore = 0;
    let activePlayer = 0;
    let playing = true;

    const dicePatterns = {
      1: `<div class="dice-dot" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>`,
      2: `<div class="dice-dot top-left"></div><div class="dice-dot bottom-right"></div>`,
      3: `<div class="dice-dot top-left"></div><div class="dice-dot" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"></div><div class="dice-dot bottom-right"></div>`,
      4: `<div class="dice-dot top-left"></div><div class="dice-dot" style="top: 15px; right: 15px;"></div><div class="dice-dot" style="bottom: 15px; left: 15px;"></div><div class="dice-dot bottom-right"></div>`,
      5: `<div class="dice-dot top-left"></div><div class="dice-dot" style="top: 15px; right: 15px;"></div><div class="dice-dot" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"></div><div class="dice-dot" style="bottom: 15px; left: 15px;"></div><div class="dice-dot bottom-right"></div>`,
      6: `<div class="dice-dot top-left"></div><div class="dice-dot" style="top: 15px; right: 15px;"></div><div class="dice-dot" style="top: 50%; left: 15px;"></div><div class="dice-dot" style="top: 50%; right: 15px;"></div><div class="dice-dot" style="bottom: 15px; left: 15px;"></div><div class="dice-dot bottom-right"></div>`
    };

    function updateCurrentScore() {
      document.getElementById(`current${activePlayer + 1}`).textContent = currentScore;
    }

    function updateScore() {
      document.getElementById(`score${activePlayer + 1}`).textContent = scores[activePlayer];
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
      document.getElementById('dice').innerHTML = dicePatterns[dice];
      
      if (dice !== 1) {
        currentScore += dice;
        updateCurrentScore();
      } else {
        switchPlayer();
      }
    }

    function holdScore() {
      if (!playing) return;
      
      scores[activePlayer] += currentScore;
      updateScore();
      
      if (scores[activePlayer] >= 100) {
        playing = false;
        alert(`Player ${activePlayer + 1} wins!`);
      } else {
        switchPlayer();
      }
    }

    function newGame() {
      scores = [0, 0];
      currentScore = 0;
      activePlayer = 0;
      playing = true;
      
      document.getElementById('score1').textContent = 0;
      document.getElementById('score2').textContent = 0;
      document.getElementById('current1').textContent = 0;
      document.getElementById('current2').textContent = 0;
      
      document.getElementById('part1').classList.add('active');
      document.getElementById('part2').classList.remove('active');
      
      document.getElementById('dice').innerHTML = dicePatterns[1];
    }
    document.getElementById('dice').innerHTML = dicePatterns[1];