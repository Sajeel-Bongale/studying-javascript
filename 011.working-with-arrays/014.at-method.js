/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/29433412#overview

    A new method called at has been introduced in JS in ES2022.

    Traditionally if we wanted to extract a value from an array we would use the square bracket syntax. -> See example 1

    But using the new method we can do the same by calling at on the array. -> See example 2

    There is one particularity of the at method that makes it useful. If we wanted to get the last element of the array
    we could use array length -1 or slice with -1 as a parameter to it. -> See example 3

    However, with the at method we can simply pass -1 to the at method to get the last element. -> See example 4

    The at method also helps with method chaining.

    One important thing to note is that the at method also works on strings. -> See example 5

 */

const data = [23, 11, 64];

// Example 1
const firstValue = data[0];
console.log(data[0]); // prints 23

// Example 2
data.at(0); // Does not work on Node v14
console.log(data.at(0)); // should print 23

// Example 3
const lastElementArrayLength = data[data.length - 1];
console.log(lastElementArrayLength);
const lastElementSlice = data.slice(-1)[0];
console.log(lastElementSlice);

// Example 4
const lastElementAt = data.at(-1); // Does not work on Node v14
console.log(lastElementAt); // should print 64

// Example 5
const name = "Jonas";
console.log(name.at(3)); // should print a
