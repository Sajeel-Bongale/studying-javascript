/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648649#overview

    Javascript has first class functions.

    This means that functions are first class citizens. This means that functions are treated as values.

    In JS functions are just types of objects, and since objects are values, functions are values too.

    We can store functions in variables, attach them as object properties, pass them as arguments to
    other functions. Functions can also be returned from other functions.

    Functions also have functions that we can call on them (bind, apply).

    The fact that JavaScript has first-class functions makes it possible for us to use and write
    higher order functions.

    So a higher order function is either a function that receives another function as an argument,
    or a function that returns a new function.

    Example: All event listeners are higher order functions because they receive other functions
    as arguments.

    Another example is when a function returns a function:
    function count() {
        let counter = 0;
        return function() {
            counter++;
        }
    }

    Note: First class functions and Higher order functions do not mean the same thing.

    First class functions is a feature that a programming language can or cannot possess.
    All it means is that all functions are values. That's it. There are no first class functions
    in practice. It is just a concept.

    There are however higher order functions in practice, which are possible because the language supports
    first class functions.


 */