/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648737#overview

    The filter method is used to remove elements from an array that do not satisfy the condition
    passed in the callback function.

    We can use to create show only deposits from an array containing both deposits and withdrawals. -> See example 1

    Using for...of loop. -> See example 2

    Example 3 shows only withdrawals.

    The filter method returns a new array and does not modify the original array.
    
 */

const movements = require('./000.setup-data')

// Example 1
const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0;
});
console.log(movements);
console.log(deposits);

// Example 2
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// Example 3
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);