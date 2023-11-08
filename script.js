const randomNumber = Math.floor(Math.random() * 100) + 1;
const playerInput = document.querySelector("#numbers");
const playBtn = document.querySelector(".play");

function play(event) {
  const guess = parseInt(playerInput.value);

  if (guess === randomNumber) {
    alert(
      "Awesome! " +
        guess +
        " was correct. You can be named many things, hungry not being one of them."
    );
  } else {
    alert(
      " Bummer... You guessed " +
        guess +
        " and the secret number was " +
        randomNumber
    );
  }
}
console.log(randomNumber);
console.log(playerInput.value);

playBtn.addEventListener("click", play);
