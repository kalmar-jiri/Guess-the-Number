'use strict';

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const getSecretNumber = () => Math.trunc(Math.random() * 20 + 1);

let secretNumber = getSecretNumber();
// document.querySelector('.number').textContent = secretNumber;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

// MAIN GAME FUNCTION
const playGame = () => {
  const guess = Number(document.querySelector('.guess').value);

  // Error when no number is given
  if (!guess) {
    displayMessage('⛔ No number detected!');

    // Winning the game
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct number!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;

      // Losing the game
    } else {
      displayMessage('😭 You lose!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#f82626';
      document.querySelector('.number').style.width = '30rem';
    }
  }
};

// 'CHECK' button event
document.querySelector('.check').addEventListener('click', playGame);
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    playGame();
  }
});

// 'AGAIN' button event
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = getSecretNumber();
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
