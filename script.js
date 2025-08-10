// console.log("Hey Students"); // This is a console log
// console.log("Hey Guys");

// Primitive Data Types
/*
1. String
2. Number
3. Boolean
*/

// Variables

// let name = "Manupa";
// name = "Dilshara"

// console.log(name);

// Operators

// console.log( (4 === 2) && (7 < 8) ); // AND
// console.log( (4 === 2) || (7 > 8) ); // OR

// console.log( !(7 > 8) ); // NOT

// Conditional Branching

// let age = 17;

// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a minor");
// }

// let marks = 80;

// if (marks >= 75) {
//   console.log("You got an A");
// } else if (marks >= 65) {
//   console.log("You got a B");
// } else if (marks >= 55) {
//   console.log("You got a C");
// } else {
//   console.log("You got a D");
// }

// let grade;
// if (marks >= 75) grade = 'A';
// else if (marks >= 65) grade = 'B';
// else if (marks >= 55) grade = 'C';
// else grade = 'D';

// switch (grade) {
//   case 'A':
//     console.log("You got an A");
//     break;
//   case 'B':
//     console.log("You got a B");
//     break;
//   case 'C':
//     console.log("You got a C");
//     break;
//   case 'D':
//     console.log("You got a D");
//     break;
// }

// Iterations

// for (let i = 0; i < 10; i++) {
//   console.log("Manupa");
// }

// let num = parseInt(prompt("Enter a number: "));
// console.log(num);

// while (num > 0) {
//   num = parseInt(prompt("Enter a number: "));
//   console.log(num);
// }

// Functions

// function add(a, b) {
//   console.log(a + b);
// }

// const add = (a, b) => {
//   console.log(a + b);
// };

// add(10, 20)

// Data Structures
// - Array
// const nums = [2, 3, 5, 7, 11];

// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     console.log(element);
// }

// for (const element of nums) {
//     console.log(element);
// }

// console.log(nums);

// const doubledNums = nums.map((element) => {
//   console.log(element);
//   return element * 2;
// });

// console.log(doubledNums);

// - Object
// const manupa = {
//   name: "Manupa",
//   age: 25,
//   gender: "Male",
//   occupation: "Software Engineer",
//   hobbies: ["Reading", "Writing", "Coding"],
//   address: {
//     city: "Colombo",
//     country: "Sri Lanka",
//   },
//   isMarried: false,

//   greet: () => {
//     console.log("Hello, I am " + manupa.name);
//   }
// };

// manupa.greet();

// DOM Manipulation
const todoCreateButton = document.querySelector(".todo__create__button");

todoCreateButton.addEventListener("click", () => {
  console.log("YOU CLICKED THE BUTTON");
});
