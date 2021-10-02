/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648743#overview

    The reduce method helps to compress or combine all the values in an array into a single value.

    The reduce method also gets a callback function, however this function, is slightly different than the
    other ones in map and filter or forEach.

    In the map, filter callbacks the parameters are currentItem, index, original array in the same order.

    In the reduce method the first parameter is a function called the accumulator, and this function is
    like a snowball that keeps adding the values. This reduce callback gets as parameters,
    the accumulator value, the current value, index and original array.
    As a second param to the reduce function we pass the initial value that the accumulator is set up with.

    See the global balance as a single value using the accumulator function in the reduce. -> See example 1

    The same can be done using an arrow function. -> See example 2

    Using for...of. -> See example 3

    We can use the reduce method for a wide variety of applications.

    In the last example we use it to find the maximum value from the movements arrays. -> See example 4

    The reduce method is the most powerful of the array methods.
 */

const { movements } = require('./000.setup-data')

// Example 1
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// Exaample 2
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// Example 3
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Example 4
// Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max);
