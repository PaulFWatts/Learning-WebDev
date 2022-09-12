let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Watts "; // Camel Case
console.log(firstName);

let PI = 3.1415; // Constants are all caps
console.log(PI);

let myFirstJob = "Web Developer"; // Use descriptive variable names
let myCurrentJob = "Teacher";

console.log(myFirstJob + " " + myCurrentJob);

// * The 7 Primitive Data Types *

// Number: Floating point numbers -> Used for decimal and integers
let age = 23; 

// String: Strings are surrounded by quotes
let myName = "Jonas";

//Boolean: True or False
let fullAge = true;

// Undefined: Undefined variables have no value
let job;

// Null: Null is a value that is not assigned to anything
let myNull = null;

// Symbol: Used for unique identifiers
let mySymbol = Symbol("My Symbol");

// BigInt: Used for large numbers
const bigint = 12345678901896532147759012345678901234567890n;
console.log(bigint);
const sameBigint = BigInt("12345678901896532147759012345678901234567890");
console.log(sameBigint);
const bigintFromNumber = BigInt(20); // same as 20n
console.log(bigintFromNumber);

/*
* JavaScript has dynamic typing: We do not have to manually declare the data type of a variable. Instead data types are automatically assigned. NOTE: The Value has type, NOT the variable. *
*/

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol("My Symbol"));
console.log(typeof BigInt("12345678901896532147759012345678901234567890"));

javascriptIsFun = "I am a string"; // Have changed the value of javascriptIsFun to a string

let year; // Declared but not assigned a value
console.log(year); // undefined
console.log(typeof year); // undefined

year = 2020; // Assigned a value
console.log(year); // 2020
console.log(typeof year); // number

console.log(typeof null); // object (regarded as a bug)

/*
* 3 different ways to declare a variable:
* LET, CONST, and VAR *
*/

let age =30;    // let is a block scoped variable
age = 31; // mutates the value of the variable

const birthYear = 2000; // const is a block scoped variable and immutable
birthYear = 2001; // error (const cannot be reassigned)
const job; // error (must declare a )

var job = 'programmer'; // var is a function scoped variable (and should be avoided)
job = 'teacher'; // mutates the value of the variable

myName = "Watts"; // Can do this but should be avoided!
console.log(myName); // Watts

/*
* Basic Operators *
*/

// * Arithmetic Operators *
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas /10, 2 ** 3);

const firstName = "Paul";
const lastName = "Watts";
console.log(firstName + " " + lastName);

// * Assignment Operators *
let x = 10 + 5; // Addition = 15
x += 10; // Addition = 25
x *= 4; // Multiplication = 100
x++; // Increment = 101
x--; // Decrement = 100
x--; // Decrement = 99
console.log(x);

// * Comparison Operators *
console.log(10 > 5); // true >, <, >=, <=
console.log(10 >= 5); // true
console.log(10 < 5); // false
console.log(10 <= 5); // false
console.log(10 == 5); // false
console.log(10 != 5); // true
console.log(10 == 10); // true
console.log(10 != 10); // false

// * Operator Precedence *
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(now - 1991 > now - 2018); // true (left to right)

console.log(25-10-5); // 10 (left to right)

let x, y;
x = y = 25-10-5; // 10 (right to left)
console.log(x, y); // 10 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



