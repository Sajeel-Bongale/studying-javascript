/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648679#overview

    Sometimes in JavaScript, we need a function that is only executed once.
    And then never again. So basically a function that disappears right after it's called once.

    To create an Immediately Invoked Function Expression (IIFE) we create a function and simply wrap
    it in an expression using round brackets. And then call it immediately after it. -> See example 1

    The same can be done using arrow functions. -> See example 2

    IIFEs create their own scope and this scope is destroyed when the function executes and finishes.

    It is a pattern used for encapsulating private information within scopes.

    IIFEs are not generally used because ES6 introduced block scoping. -> See example 3

 */


const runOnce = function () {
    console.log('This will never run again');
};
runOnce(); // Can be called once, or as many times as we want.
           // It does not fit the condition that we want to run this once and only once.


// Example 1
(function () {
    console.log('This will never run again');
    const isPrivate = 23; // variable is private because encapsulated in function scope
})();
// console.log(isPrivate);

// Example 2
(() => console.log('This will ALSO never run again'))();

// Example 3
{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);