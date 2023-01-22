`use strict`;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('incorect type or no number');
  } else if (!(guess >= 1 && guess <= 20)) {
    displayMessage('number must me between 1 and 20');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber || guess < secretNumber) {
    if (score > 1) {
      displayMessage(
        `${guess > secretNumber ? 'big' : 'small'}  as SecretNumber!`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
});
