window.addEventListener('load', init);
// Globals

// available levels
const levels = {
  easy: 10,
  medium: 6,
  hard: 3
};
// to change level
const currentLevel = levels.medium;

let time = currentLevel,
  score = 0,
  isPlaying;

// DOM variables
const wordInput = document.getElementById('word-input'),
  currentWord = document.getElementById('current-word'),
  scoreDisplay = document.getElementById('score'),
  timeDisplay = document.getElementById('time'),
  message = document.getElementById('message'),
  seconds = document.getElementById('seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// initialize game
function init() {
  // show number of seconds in ui
  seconds.innerHTML = currentLevel;
  //   load word from array
  showWord(words);
  //   start matching on word input
  wordInput.addEventListener('input', startMatch);
  //   call countdown every second
  setInterval(countdown, 1000);
  //   check game status
  setInterval(checkStatus, 50);
}

// start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  //   if score is -1 display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// pick & show random word
function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random word
  currentWord.innerHTML = words[randIndex];
}
// countdown timer
function countdown() {
  // make sure time is not run out
  if (time > 0) {
    // decrement time
    time--;
  } else if (time === 0) {
    // game is over
    isPlaying = false;
  }
  //   show time on page
  timeDisplay.innerHTML = time;
}
// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
