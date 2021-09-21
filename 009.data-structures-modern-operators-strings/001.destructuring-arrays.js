/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648521#questions

    New ES6 concept that allows you to pick and choose what elements you want from the array.

    It unpacks an array without destroying the original array.

    Simple destructuring -> See Example 1

    Destructuring with gaps in between -> See example 2

    Switching Variables using destructuring -> See example 3

    Destructure values from a function call -> See Example 4

    Nested destructuring -> See Example 5
 */

// Test Object
const restaurant = require('./000.setup-data')

// Example 1
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z); // prints 2 3 4
console.log(arr); // prints [2, 3, 4] Original array not destroyed


// Example 2
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // prints Italian Vegetarian


// Example 3
// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary); // prints Vegetarian Italian


//Example 4
// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // prints Garlic Bread Pizza


// Example 5
// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);  // prints 2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

