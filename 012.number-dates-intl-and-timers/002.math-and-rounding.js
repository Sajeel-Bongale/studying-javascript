/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648879#overview

    To find the square root of a number we use the Math.sqrt method. See example 1
    The same can be achieved using ** operator by raising to the power 1/2 and similarly
    the cubic root can be calculated by raising to the power 1/3.

    To find a maximum value from a range of values we use the Math.max method. This method
    can coerce strings to numbers but does not parse them. -> See example 2

    Similarly we have the min method to calculate the minimum value from the passed range. -> See example 3

    Besides methods there are also a few constants on the Math object. Something like the value of PI.
    We can use these constants in our calculations to find out the area of a circle. -> See example 4

    To generate random numbers we use the Math.random method. -> See example 5

    Helper function to generate random values between a min and max range. -> See example 6

    We use Math.trunc to remove the fractional part of a number leaving only the integer. -> See example 7

    Math.rounds rounds to the nearest integer. -> See example 8

    Both floor and trunc do the same thing for positive numbers. However, they do not behave the same way
    for negative numbers.

    Working with decimals or floating point numbers is slightly different. To run methods on floating point
    numbers you need to wrap them in parentheses so that JS can box them.

    To work with decimal point numbers there is a toFixed method that takes the number of digits as an
    argument, letting the method know how many numbers after the decimal it should add to the resulting number.
    0 means no decimal point. -> See example 11

 */

// Example 1
console.log(Math.sqrt(25)); // prints 5
console.log(25 ** (1 / 2)); // prints 5
console.log(8 ** (1 / 3)); // prints 2


// Example 2
console.log(Math.max(5, 18, 23, 11, 2)); // prints 23
console.log(Math.max(5, 18, '23', 11, 2)); // prints 23 -> max only coerces
console.log(Math.max(5, 18, '23px', 11, 2)); // prints NaN -> max does not parse strings

// Example 3
console.log(Math.min(5, 18, 23, 11, 2)); // prints 2

//  Example 4
console.log(Math.PI * Number.parseFloat('10px') ** 2); // prints 314.1592653589793

// Example 5
console.log(Math.trunc(Math.random() * 6) + 1); // prints a random number

// Example 6
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20)); // prints a random number between 10 and 20


// Example 7
console.log(Math.trunc(23.3)); // prints 23
console.log(Math.trunc(-23.3)); // prints -23

// Example 8
console.log(Math.round(23.3)); // prints 23
console.log(Math.round(23.9)); // prints 24

// Example 9
console.log(Math.ceil(23.3)); // prints 24
console.log(Math.ceil(23.9)); // prints 24

// Example 10
console.log(Math.floor(23.3)); // prints 23
console.log(Math.floor('23.9')); // prints 23
console.log(Math.floor(-23.3)); // prints -24


// Example 11
console.log((2.7).toFixed(0)); // prints '3' -> because of rounding off of the value
console.log((2.7).toFixed(3)); // prints '2.700'
console.log((2.345).toFixed(2)); // prints '2.35' -> rounds off the third place
console.log(+(2.345).toFixed(2)); // prints 2.35 -> all above logs will result in strings
                                             // this one creates a number because of the +
