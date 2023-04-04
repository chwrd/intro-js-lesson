/*
========== LESSON 1 - VARIABLES ==========
Complete the following numbered tasks:
*/

// 1. Declare 2 variables below:
let a;
let b;

// Initialize 3 variables:

// 2. Assign one to the type Number below:
let c = 1;

// 3. Assign one to the type Boolean below:
let d = false;

// 4. Assign one to the type String below:
c = "books";

console.log(c);
console.log(d);


/*

========== LESSON 2 - FUNCTIONS ==========

*/

// 1. Create a doubleNumber function statement that takes in 1 number parameter and returns double the value.

function doubleNumber(number) {
    return number * 2;
}


// 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square

function squareNumber(number) {
    return number * number;
}

// 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers

const pro = (a, b) => a * b;


console.log("Lesson 2");
console.log(doubleNumber(12)); 
console.log(squareNumber(12));
console.log(pro(2,8));

/*
========== LESSON 3 - NUMBERS ==========
*/
// 1. Create a sumOfThree function statement that takes in 3 number parameter and returns sum.

const sumOfThree = (a, b, c) => a + b + c;
console.log(sumOfThree(2, 5, 9));
// 2. Create a productofThree function expression that takes in 3 number parameter and returns the quotient.
const quotientofThree = (a, b, c) => a / b / c;
console.log(quotientofThree(2, 5, 9));
// 3. Create a getRemainder arrow function that takes in 2 number parameters and returns the remainder of the first number divided by the second number
const getRemainder = (a, b) => a % b;
console.log(getRemainder(6, 2));
// 4. Create a getRootRounded function that takes in 1 number, and returns the absolute value's square root, rounded up. Note: negative numbers should have their absolute value taken to still work.
let getRootRounded = (a) => Math.ceil(Math.sqrt(Math.abs(a)));
console.log(getRootRounded(3));
// 5. Create a getRandom function that returns a random number from 1-100.
const getRandom = Math.ceil(Math.random()*100);
console.log(getRandom);




