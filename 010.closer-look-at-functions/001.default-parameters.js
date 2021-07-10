/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648643#overview

    ES6 introduced the concept of default values to be set on parameters of functions.

    Sometimes it's useful to have functions where some parameters are set by default.

    To use this feature you can set the values using the equals sign on the method signature. -> See Example 1

    When you send in the required parameters they override the defaults that are set. When not sent,
    they take the default values.

    One key thing to remember is that you cannot skip values in between when using default parameters, instead
    you can send the values in between as explicit default arguments. -> See example 2

    You can use default or set parameters declared chronologically in advance in computations
    that occur after that parameter value has been set. -> See Example 3
 */

// Default Parameters
const bookings = [];

// Example 1
const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers // Example 3
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Example 2
createBooking('LH123', undefined, 1000);