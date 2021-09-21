/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648563#overview

    The for of loop helps to loop over arrays without having to bother about the size of the array
    and about incrementing the index.

    It is an abstraction over the regular for loop. -> See example 1

    The for of loop does not inherently provide an index, so to obtain an index we need to
    run the entries method on the array to get an iterator.
    An iterator holds arrays of the structure
    [index, value]
    for each value in the array.
    We can destructure an array.entry to obtain the index. -> See example 2

 */

// Test Setup
const restaurant = require('./000.setup-data')

// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Example 1
for (const item of menu) console.log(item);

// Example 2
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

