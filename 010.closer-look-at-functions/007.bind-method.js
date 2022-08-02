/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648667#overview

    Just like the call and apply methods, bind allows us to supply a new this to the function being called.
    The only difference is that bind does not immediately call the function, instead it returns a
    method reference with the newly attached this.

    As shown in example 1, we create a new function called bookEW, bookLH and bookLX which are created
    using new objects as their this.

    Once the method reference is acquired, we can then call the method with the necessary parameters
    as per its original signature.

    Using this, we can have the same method work by defining its this with different objects
    and then using the newly created method references to make the appropriate calls.

    If you pass more arguments than one while calling bind on the method, it sets the further arguments
    as per the signature in the same order. Then you can call the bound method using the remaining
    arguments. -> See example 2

    This method of setting some of the arguments as default using the bind method is a common
    practice and is called partial application. -> See example 4

    When using objects with event listeners it becomes mandatory to use the bind method,
    since the this in an event listener always refers to the target element. Also we can't
    use call or apply because they immediately execute the function there itself.
    What event listeners expect is a reference to the method which is only available
    using the bind method. -> See example 3

 */

// Test setup
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
const book = lufthansa.book;

// Example 1
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams'); // prints Steven Williams booked a seat on Eurowings flight EW23

// Example 2
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann'); // prints Jonas Schmedtmann booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper'); // prints Martha Cooper booked a seat on Eurowings flight EW23

// Example 3
// This does not work in Node because there is no document object
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane(); // this fails here
/*document
    .querySelector('.buy') // commenting because document is not available in NodeJS
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/

// Example 4
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23); // binds 'this' to null and rate to 23%
// addVAT = value => value + value * 0.23;
console.log(addVAT(100)); // prints 123
console.log(addVAT(23)); // prints 28.29
