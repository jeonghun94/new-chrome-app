const guessNumber = document.querySelector("#guessNumber");
const maxNumber = document.querySelector("#maxNumber");
const form = document.querySelector("form");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const playGame = (e) => {
  e.preventDefault();
  const max = maxNumber.value;
  const guess = Number(guessNumber.value);
  const random = Number(getRandomIntInclusive(0, max));

  if (guess > max) {
    alert("You can't guess more than the max number!");
    return;
  }

  writeChoseText(guess, random);
  writeResultText(guess, random);
};

const writeChoseText = (guess, random) => {
  const resultText = document.querySelector("#choseText");
  resultText.innerHTML = `You chose: ${guess}, the machine chose: ${random}`;
};

const writeResultText = (guess, random) => {
  const resultText = document.querySelector("#resultText");
  if (guess > random) {
    resultText.innerHTML = "You won!";
  } else if (guess === random) {
    resultText.innerHTML = "You drew!";
  } else {
    resultText.innerHTML = "You lost!";
  }
};

form.addEventListener("submit", playGame);
