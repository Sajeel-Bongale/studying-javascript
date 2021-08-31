/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648657#overview

    A function can also return a function.

    When one function returns a function, the returned value can be executed. This works
    because of a concept called closure

 */

// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

// Challenge - rewriting the above function as arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');