/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648655#overview

    As discussed previously, functions can accept other functions as arguments. This makes the
    function accepting the function a higher order function.

    oneWord and upperFirstWord are two functions that we can pass around.
    transformer is a higher order function that accepts any callback function and executes
    it by passing the string which is sent to it as the first parameter.

    Functions themselves have methods and properties on them. One of them is the name parameter.

    Event listeners take a call back function and therefore it makes them higher order functions.

    For each is also a higher order function

    Why are callbacks used so frequently in JS?

    First, they allow you to reuse code (functions).

    Second, callbacks allow us to create abstraction.
    The transformer function abstracts away the internal details. transformer doesn't care
    about how the string is transformed without knowing how it works.

    It helps in delegating work to execute lower functions.
 */

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
// JS uses callbacks all the time
const high5 = function () {
    console.log('hi 5');
};
//document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
