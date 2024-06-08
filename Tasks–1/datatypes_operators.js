// Exercise 1: Numbers

// 1. Declare a number variable and assign it a value.
let num1 = 25;

// 2. Declare a number variable and assign it a floating number.
let num2 = 12.5;

// 3. Perform addition, subtraction, multiplication, division, modulus and exponentiation with number variable and another number.
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
let exponentiation = num1 ** 2; // num1 raised to the power of 2

// 4. Print all your variables.
console.log("num1:", num1);
console.log("num2:", num2);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// Exercise 2: Boolean and Operators

// 1. Use comparison operators to compare two numbers and store the results in boolean variables.
let num_1 = 10;
let num_2 = 20;

let isNum1GreaterThanNum2 = num_1 > num_2;
let isNum1LessThanOrEqualToNum2 = num_1 <= num_2;
let isNum1EqualToNum2 = num_1 === num_2;
let isNum1NotEqualToNum2 = num_1 !== num_2;

console.log("num_1 is greater than num_2:", isNum1GreaterThanNum2);
console.log(
  "num_1 is less than or equal to num_2:",
  isNum1LessThanOrEqualToNum2
);
console.log("num_1 is equal to num_2:", isNum1EqualToNum2);
console.log("num_1 is not equal to num_2:", isNum1NotEqualToNum2);

// 2. Declare two variables x and y with the values 8 and 12 respectively.
let x = 8;
let y = 12;

console.log("x is greater than y:", x > y);
console.log("x is less than or equal to y:", x <= y);
console.log("x is equal to y:", x === y);
console.log("x is not equal to y:", x !== y);

// 3. Declare the variables a and b with values true and false, determine and print the result of the following logical operations:
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// 4. Declare variable p and assign it a value of 10. Use the following assignment operators to modify the value of p with any number and print the result each time:
let p = 10;

p += 5; // p = p + 5
console.log("p after += 5:", p);

p -= 3; // p = p - 3
console.log("p after -= 3:", p);

p *= 2; // p = p * 2
console.log("p after *= 2:", p);

p /= 4; // p = p / 4
console.log("p after /= 4:", p);

p %= 3; // p = p % 3
console.log("p after %= 3:", p);
