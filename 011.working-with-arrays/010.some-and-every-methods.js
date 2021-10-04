/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648771#overview

    There is an includes method in JS checks if the passed value is available in the array or not.

    However, it only tests for equality. -> See example 1

    If we want to test for a condition, we need to use the sum and every methods instead.

    Some tests if at least one of the elements satisfies the condition mentioned in the callback function.
    If it matches, it returns true, else it returns false. -> See example 2

    Every, as its name suggests, checks if every element satisfies the condition mentioned in the callback function.
    If every value matches, it returns true, else it returns false. -> See example 3

     You can pass separate callback functions to the some and every method. -> See example 4

 */

const {movements} = require('./000.setup-data');

// Example 1
// EQUALITY
console.log(movements.includes(-130));

// Example 2
// SOME: CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);


// Example 3
// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


// Example 4
// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));