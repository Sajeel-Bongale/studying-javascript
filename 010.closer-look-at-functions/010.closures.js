/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648683#overview

    Usually we do not create closures manually, however, they get created automatically as we code.
    We just need to recognize the places that creates them.

    We can say that a closure makes a function remember all the variables that existed
    at the function's birthplace.

    A function always has access to the variable environment of the execution context in which it was created,
    even after that execution context is gone.

    The closure is then basically the variable environment attached to the function.

    So in a sense, the scope chain is actually preserved through the closure, even when a scope
    has already been destroyed because its execution context is gone. This means that even though
    the execution context has actually been destroyed, the variable environment somehow keeps living
    somewhere in the engine. -> See example 1

    You can console.dir the variable and then look into console on the dev tools to expand the booker
    variable. In there you will find the [[Scopes]] object which will hold a reference to the
    variable environment that is mentioned above. -> See example 2

 */

// Closures
// Example 1
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};
const booker = secureBooking();
booker();
booker();
booker();

// Example 2
console.dir(booker);