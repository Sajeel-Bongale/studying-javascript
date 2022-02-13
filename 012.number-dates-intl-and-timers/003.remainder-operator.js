/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648885#overview

    The remainder operator returns the remainder of a division operation. -> See example 1

    The remainder operator can be used to check if a number is even or odd. -> See example 2

 */

// Example 1
console.log(5 % 2); // prints 1

// Example 2
console.log(6 % 2); // prints 0
console.log(7 % 2);// prints 1
const isEven = n => n % 2 === 0;

console.log(isEven(6)); // prints true
console.log(isEven(7)); // prints false
