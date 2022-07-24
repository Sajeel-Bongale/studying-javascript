/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648609#overview

    Strings are iterables

    Strings can be accessed using indexes. -> See Example 1

    Strings have a length property on them. -> See Example 2

    Strings have helper methods.
    One is indexOf which provides the first index of a matching character. -> See Example 3
    It can also be used to find words in the string.

    Slice method can be used to extract certain substrings from within the string. -> See Example 4
    Slice uses indexes of the string to find substrings.
    First param is start(inclusive) and second param is end(non inclusive and optional)

    These methods can be combined for practical applications. -> See example 5

    When using methods on strings JS boxes them into objects and then applies the methods on them. -> See example 6
    The returned value is type string.

    This boxing and unboxing happens automatically and the user is unaware of this.

 */

///////////////////////////////////////
// Test Setup
const airline = 'TAP Air Portugal';
const plane = 'A320';

// Example 1
console.log(plane[0]); // prints A
console.log(plane[1]); // prints 3
console.log(plane[2]); // prints 2
console.log('B737'[0]); // prints B

// Example 2
console.log(airline.length); // prints 16
console.log('B737'.length); // prints 4

// Example 3
console.log(airline.indexOf('r')); // prints 6
console.log(airline.lastIndexOf('r')); // prints 10
console.log(airline.indexOf('portugal')); // prints -1

// Example 4
console.log(airline.slice(4)); // prints Air Portugal
console.log(airline.slice(4, 7)); // prints Air

// Example 5
console.log(airline.slice(0, airline.indexOf(' '))); // prints TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // prints Portugal
console.log(airline.slice(-2)); // prints al
console.log(airline.slice(1, -1)); // prints AP Air Portuga

// Example 5
const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
    else console.log('You got lucky 😎');
};

checkMiddleSeat('11B'); // prints You got the middle seat 😬
checkMiddleSeat('23C'); // prints You got lucky �
checkMiddleSeat('3E'); // prints You got the middle seat 😬

// Example 6
console.log(new String('jonas')); // prints [String: 'jonas']
console.log(typeof new String('jonas')); // prints object
console.log(typeof new String('jonas').slice(1)); // prints string
