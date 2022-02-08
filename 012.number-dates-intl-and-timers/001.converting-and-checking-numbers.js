/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648873#overview

    In JS all numbers are represented as floating point numbers internally. -> See example 1

    Also numbers are represented internally in a 64 base format. So that means that numbers are always
    stored in a binary format.

    As JS uses binary systems, it cannot correctly represent certain fractional values like
    0.1. If you add 0.1 and 0.2 JS gives out a value like 0.30000000000000004 which is obviously
    incorrect. -> See example 2

    This also results in weird behaviour like 0.1 + 0.2 === 0.3 to give out false. JS tries to round
    off values as much as possible but due to binary systems some minor errors creep into the Number
    operations and therefore, JS cannot be used for scientific calculations as it may result in
    errors. -> See example 3

    To convert a string to number we can use the Number constructor. -> See example 4

    There is another shortcut of adding + to the start of the string to convert it to a number. -> See example 5

    To extract numbers from a string that may contain some text data, we can use the parseInt method
    available on the Number object. The only condition is that the string must start with a number -> See example 6

    We can also use parseFloat to extract floating point numbers just like we did with parseInt. -> See example 7

    Running parseInt on a string holding a floating point number will result in an integer. -> See example 8

    Number object has a method to check if any value is NaN(Not a Number). -> See example 9

    There is a better to do this check. It is isFinite. It returns false when checking for a string
    holding a number. The same check fails with isNaN and for this reason, isFinite is better at
    checking if the passed argument is a valid number or not. -> See example 10

    The isInteger checks if the passed value is an integer. -> See example 11

 */

// Example 1
console.log(23 === 23.000); // prints true

// Example 2
console.log(0.1 + 0.2) // prints 0.30000000000000004

// Example 3
console.log(0.1 + 0.2 === 0.3) // prints false

// Example 4
console.log(Number('23')); // prints 23

// Example 5
console.log(+'23'); // prints 23

// Example 6
console.log(Number.parseInt('30px')); // prints 30

// Example 7
console.log(Number.parseFloat('2.5rem')); // prints 2.5

// Example 8
console.log(Number.parseInt('2.5rem')); // prints 2

// Example 9
console.log(Number.isNaN(20)); // prints false
console.log(Number.isNaN('20')); // prints false
console.log(Number.isNaN(+'20X')); // prints true -> +'20X' returns NaN
console.log(Number.isNaN(23 / 0)); // prints false -> 23 / 0 returns Infinity

// Example 10
console.log(Number.isFinite(20)); // prints true
console.log(Number.isFinite('20')); // prints false
console.log(Number.isFinite(+'20X')); // prints false
console.log(Number.isFinite(23 / 0)); // prints false

// Example 11
console.log(Number.isInteger(23)); // prints true
console.log(Number.isInteger(23.0)); // prints true
console.log(Number.isInteger(23 / 0)); // prints false

