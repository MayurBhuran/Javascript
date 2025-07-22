let randNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuesses = [];
let guessCount = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    preGuesses.push(guess);
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randNumber) {
    displaymessage('Congratulations! You got it right!');
    endgame();
  } else if (guess < randNumber) {
    displaymessage('Your guess is too low!');
  } else if (guess > randNumber) {
    displaymessage('Your guess is too high!');
  }

  if (guessCount === 11) {
    displaymessage(`Game Over! The number was ${randNumber}`);
    endgame();
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  guessCount++;
  remaining.innerHTML = `${11 - guessCount} guesses left`;
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newgame();
}

function newgame() {
  const newgameButton = document.querySelector('#newgame');
  newgameButton.addEventListener('click', function () {
    randNumber = parseInt(Math.random() * 100) + 1;
    preGuesses = [];
    guessCount = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - guessCount} guesses left`;
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    playGame = true;
  });
}
