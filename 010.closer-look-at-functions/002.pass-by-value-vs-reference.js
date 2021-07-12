/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648645#overview

    You can pass two types of arguments to functions: primitives and reference types.

    In the checkIn function you pass the flightNum as a string and passenger as object.
    These values received in the function are actually copies of the passed values.

    When you change the values inside the function, you are actually changing the copies.

    Since primitive copies of variables when changed, do not update the original variable ( see section
    008.how-js-works-behind-the-scenes/007.primitive-vs-objects.js for more details ) the outside variable
    retains the original value while the change is only visible inside the function. -> See example 1
    This however, is not true for objects such as passenger passed as the second argument. The outside value
    is changed when the value in the function is update. This is because objects are reference data types
    and their references are passed in the functions.
    Therefore when you update the values inside the function, it is the same object in the heap memory
    that is being updated, so those changes are reflected across the files.

    That is why, you should be careful and mindful of the consequences when you pass objects as arguments
    to functions.

    Note: In Javascript there is no pass by reference, unlike how it appears to be. ALl the passed arguments
    are passed by value and never by reference.
    When you pass objects, we do in fact pass in a reference. So the memory address of the object.
    However, that reference itself is still a value. It's simply a value that contains a memory address.

 */

// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 24739479284) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};
// checkIn(flight, jonas);
// Example 1 (uncomment for example)
// console.log(flight);
// Example 2 (uncomment for example)
// console.log(jonas);
// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);