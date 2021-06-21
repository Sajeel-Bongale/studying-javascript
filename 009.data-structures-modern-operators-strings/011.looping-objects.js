/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648577#overview

    Looping over objects is similar to looping over arrays.

    We can loop over objects using for...of over keys, values or entries of Object class.

    Use Object.keys(myObj) to extract an array containing all the keys in an object.
    You can then loop over it using for...of. -> See example 1

    Use Object.values(myObj) to extract an array containing all the keys in an object.
    You can then loop over it using for...of. -> See example 2

    Use Object.entries(myObj) to retrieve an array containing arrays of key, value tuples. -> See example 3

 */
import { restaurant } from './000.setup-data';

// Test setup
const { openingHours } = restaurant

// Example 1
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Example 2
const values = Object.values(openingHours);
console.log(values);


// Example 3
const entries = Object.entries(openingHours);
// console.log(entries);
// [key, value]
for (const [day, { open, close }] of entries) { // using destructuring to extract only required properties
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

