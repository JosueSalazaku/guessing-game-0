const randomNumber = Math.floor(Math.random() * 100) + 1;
const playerInput = document.querySelector("#numbers");
const playBtn = document.querySelector(".play");

function play() {
  if (randomNumber === playerInput) {
    const guess = parseInt(playerInput.value);

    alert(
      "Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them."
    );
  } else {
    alert(
      "Bummer... You guessed (guess) and the secret number was " + randomNumber
    );
  }
}
console.log(randomNumber);
console.log(playerInput.value);
