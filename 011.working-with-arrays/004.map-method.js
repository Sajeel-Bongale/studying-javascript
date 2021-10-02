/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648731#overview

    The map method allows you to iterate over arrays and perform some action. But unlike the forEach method,
    it creates and returns a new array.

    As an example we can convert an array containing amounts in USD and convert them to Euros. The conversion rate
    is stored in the eurToUsd variable. -> See example 1

    Using arrow function. -> See example 2

    The same using for...of loop. -> See example 3

    The map function callback gets the item under consideration as the first implicit parameter, index as the
    second and the original array as the third implicit parameter. -> See example 4

    The map method returns a new array and does not modify the original array.

 */
const { movements } = require('./000.setup-data')

const eurToUsd = 1.1; // conversion rate

// Example 1
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// Example 2
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// Example 3
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// Example 4
const movementsDescriptions = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
            mov
        )}`
);
console.log(movementsDescriptions);
