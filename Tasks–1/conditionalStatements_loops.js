// Exercise 1: Temperature check using if-else statements

let temperature = 18; // You can change this value to test different conditions

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else if (temperature > 25) {
  console.log("It's warm.");
}

// Exercise 1: Temperature check using switch statements

switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature >= 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("It's mild.");
    break;
  case temperature > 25:
    console.log("It's warm.");
    break;
  default:
    console.log("Temperature is not within the expected range.");
}

// Exercise 2: Divisibility Check using if-else statements

let number = 18; // You can change this value to test different conditions

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// Exercise 2: Divisibility Check using switch statements

switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops

// 1. Print numbers from 1 to 10.
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print all even numbers between 1 and 20.
console.log("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of all numbers from 1 to 100:", sum);

// 4. Print each element of the array [1, 2, 3, 4, 5] to the console.
const numbers1 = [1, 2, 3, 4, 5];
console.log("Elements of the array [1, 2, 3, 4, 5]:");
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// 5. Find and print the largest number in the array [3, 7, 2, 5, 10, 6].
const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largestNumber) {
    largestNumber = numbers2[i];
  }
}
console.log("Largest number in the array [3, 7, 2, 5, 10, 6]:", largestNumber);

// Exercise 4: While loops

// 1. Print numbers from 1 to 10.
console.log("Numbers from 1 to 10:");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Print all even numbers between 1 and 20.
console.log("Even numbers between 1 and 20:");
i = 1;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
sum = 0;
i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log("Sum of all numbers from 1 to 100:", sum);

// 4. Print all multiples of 5 less than 50.
console.log("Multiples of 5 less than 50:");
i = 1;
while (i < 50) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
}

// Exercise 5: Do While loops

// 1. Print numbers from 1 to 10.
console.log("Numbers from 1 to 10:");
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the result.
sum = 0;
i = 1;
do {
  sum += i;
  i++;
} while (i <= 100);
console.log("Sum of all numbers from 1 to 100:", sum);

// 3. Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.
const prompt = require("prompt-sync")();
let userNumber;
do {
  userNumber = parseInt(prompt("Enter a number greater than 10: "));
} while (userNumber <= 10);
console.log("You entered a valid number:", userNumber);

// 4. Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10: "));
  if (guess === correctNumber) {
    console.log("Congratulations! You guessed the correct number.");
  } else {
    console.log("Try again.");
  }
} while (guess !== correctNumber);
