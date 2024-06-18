const gameBoard = document.getElementById("game-board"); // Get the game board element from the DOM
const letters = "AABBCCDDEEFFGGHH".split(""); // Split the string of letters into an array
let shuffledLetters = shuffleArray(letters); // Shuffle the letters array
let firstCard, secondCard; // Variables to store the first and second selected cards
let lockBoard = false; // Variable to lock the board to prevent multiple card flips at the same time
let matches = 0; // Counter for matched pairs

function shuffleArray(array) {
  // Function to shuffle an array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array; // Return the shuffled array
}

function createBoard() {
  // Function to create the game board
  shuffledLetters.forEach((letter) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.letter = letter;
    card.innerHTML =
      '<span class="front"></span><span class="back">' + letter + "</span>"; // Add inner HTML for the card
    card.addEventListener("click", flipCard); // Add an event listener for the click event
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  // Function to handle card flip
  if (lockBoard) return;
  if (this === firstCard) return; // If the same card is clicked twice, exit the function

  this.classList.add("flipped");
  this.querySelector(".back").style.visibility = "visible"; // Make the back of the card visible

  if (!firstCard) {
    // If no card has been flipped
    firstCard = this; // Set the first card
    return; // Exit the function
  }

  secondCard = this;
  lockBoard = true;

  if (firstCard.dataset.letter === secondCard.dataset.letter) {
    // If the cards match
    disableCards(); // Disable the cards
    matches += 1; // Increment the match counter
    if (matches === 8) {
      // If all pairs are matched
      setTimeout(() => alert("You win!"), 500); // Display a win message
    }
  } else {
    unflipCards(); // If the cards do not match, unflip them
  }
}

function disableCards() {
  // Function to disable matched cards
  firstCard.classList.add("matched"); // Add the 'matched' class to the first card
  secondCard.classList.add("matched");
  firstCard.removeEventListener("click", flipCard); // Remove the click event listener from the first card
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  // Function to unflip non-matching cards
  setTimeout(() => {
    firstCard.classList.remove("flipped"); // Remove the 'flipped' class from the first card
    secondCard.classList.remove("flipped");
    firstCard.querySelector(".back").style.visibility = "hidden"; // Hide the back of the first card
    secondCard.querySelector(".back").style.visibility = "hidden";
    resetBoard();
  }, 1000); // Delay of 1 second
}

function resetBoard() {
  // Function to reset the board
  [firstCard, secondCard] = [null, null]; // Reset the first and second card variables
  lockBoard = false; // Unlock the board
}

createBoard(); // Initialize the game board
