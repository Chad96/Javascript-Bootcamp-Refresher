const gameBoard = document.getElementById("game-board");
const letters = "AABBCCDDEEFFGGHH".split("");
let shuffledLetters = shuffleArray(letters);
let firstCard, secondCard;
let lockBoard = false;
let matches = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  shuffledLetters.forEach((letter) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.letter = letter;
    card.innerHTML =
      '<span class="front"></span><span class="back">' + letter + "</span>";
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");
  this.querySelector(".back").style.visibility = "visible";

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  if (firstCard.dataset.letter === secondCard.dataset.letter) {
    disableCards();
    matches += 1;
    if (matches === 8) {
      setTimeout(() => alert("You win!"), 500);
    }
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    firstCard.querySelector(".back").style.visibility = "hidden";
    secondCard.querySelector(".back").style.visibility = "hidden";
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

createBoard();
