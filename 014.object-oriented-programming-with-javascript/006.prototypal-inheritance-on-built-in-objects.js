/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649059#overview

    The prototype of the prototype on a custom(or built in object like array) object will be that of the
    Object class. -> See example 1

    Thus all of the methods that need to be shared amongst all objects can be added to a prototype object
    and then the same copy of that object will be passed around without having to use more memory per object.

    You can also create custom methods and add them to existing prototypes like that of Array. -> See example 2

    However, adding methods to prototypes is not a good practice. So please refrain from doing this.

    Functions in JS are also objects and thus they too have a prototype. That is why the methods
    like call, apply and bind can be call on the 'methods'.

 */

// Example 1
const myArray = [1, 2, 3, 4, 4, 4, 5, 3, 2, 1];
console.log(myArray.__proto__.__proto__) // returns prototype of Object in the browser console
console.log(myArray.__proto__.__proto__.__proto__) // returns null

// Example 2
Array.prototype.unique = function () {
    return [...new Set(this)]
};
console.log(myArray.unique())

