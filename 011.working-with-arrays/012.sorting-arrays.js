/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648779#overview

    We often need to sort arrays that have varied sorts of data in them.

    There is a sort method that JS provides out of the box for this purpose.

    Sort mutates the original array. -> See example 1

    The sort method sorts the array based on strings, so when you sort numbers, you observe
    that the array is not sorted as we expect it to be. This is because at runtime, JS
    will coerce the numbers to strings and then compare then as strings.

    To produce the results as we expect them, we will need to pass a sort function callback.

    This sort function takes two arguments, which is the current element at hand and the next element.

    The rules of the sort callback state that if you want to keep the order as is you return a number
    less than 0. If you want switch the order, you return a value greater than 0.
    If you return 0 the values remain unchanged.

    Adding a slice() call before calling sort allows us to create a shallow copy of the array and hence
    lets you keep your original array intact because sort is a mutative property.

    NOTE:
    return < 0, A, B (keep order)
    return > 0, B, A (switch order)

 */

const {movements} = require('./000.setup-data');
const movementsAscendCopy = [...movements];
const movementsDescendCopy = [...movements];

// Sorting Arrays

// Example 1
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // prints [ 'Adam', 'Jonas', 'Martha', 'Zach' ]
console.log(owners); // prints [ 'Adam', 'Jonas', 'Martha', 'Zach' ]


// Example 2
// Ascending
movementsAscendCopy.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

movementsAscendCopy.sort((a, b) => a - b);
console.log(movementsAscendCopy);
// prints [
//   -650, -400, -130,
//     70,  200,  450,
//   1300, 3000
// ]

// Descending
movementsDescendCopy.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
movementsDescendCopy.sort((a, b) => b - a);
console.log(movementsDescendCopy);
// prints [
//   3000, 1300,  450,
//    200,   70, -130,
//   -400, -650
// ]