/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648775#overview

    Flat method helps to destructure nested arrays and help generate an array with all the values concatenated.
    The default is that it will flatten the array to a depth of 1. -> See example 1

    If there are deeply nested arrays, then we need to specify the depth to which the flattening should
    take place. -> See Example 2

    A common operation that needs to be performed is to map on an array(say an array of objects) and then
    flatten the values that come out of the map callback. -> See example 3

    Flat map only goes one level deep and this cannot be changed.


 */

const {accounts} = require('./000.setup-data');

// Example 1
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// Example 2
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Practical example
const overalBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);


// Example 3
// flatMap
const overalBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);