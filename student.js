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