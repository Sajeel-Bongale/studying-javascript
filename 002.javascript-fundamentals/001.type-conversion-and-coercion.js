/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648179#overview

    In JS there is type conversion and coercion.

    Type conversion is when you manually convert one type to another.

    Type coercion is when JS converts one type to another automatically.

    To manually convert strings to numbers, use the Number() constructor -> See example 1

    JS gives NaN(Not a Number) value when you try to convert a string or other value which cannot be converted
    into a number to a number. -> See example 2

    NaN means invalid number.

    Type coercion happens whenever an operator is dealing with two values that are of different types.
    In this case JS will convert one value to the type of other behind the scenes to make the comparison
    happen. -> See example 3

    Type coercion depends on the operator being used.
    + coerces to string
    > and - and *  and / coerces to number -> See example 4

 */

// Example 1
let age = '18';
age = Number(age);
console.log(age + 10); // returns 28

// Example 2
console.log(Number('age')); // returns NaN error

// Example 3
console.log('I am ' + 23 + ' years old');

// Example 4
console.log('23' - '10' - 3 ) // returns 10

// Example 5
let n = '1' + 1;
n = n - 1;
console.log(n) // outputs 10

// Example 6
let a = 2 + 3 + 4 + '5';
console.log(a); // outputs '95'

let b = '10' - '4' - '2' + '5';
console.log(b); // outputs '45'
