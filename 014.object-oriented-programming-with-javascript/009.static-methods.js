/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649077#overview

    A static method is a method that is attached to the constructor function. That means the method
    is not available on the created object but on the constructor function itself. -> See example 1

    These methods are used as helpers with the constructor.

    We can create static methods, both for constructors and ES6 classes.

    To do so we simply attach the method to the constructor.

    One thing to note is that static methods cannot be inherited since they are not a part
    of the prototype object.

    To add a static method to a class you need to prepend the static keyword with the the method
    name that you want to make static. -> See example 3

 */


// Example 1
const arr = Array.from(new Set([1,2,3,4,1]));
console.log(arr); // prints [ 1, 2, 3, 4 ]
// [2,3,4,5].from() // throws an error because method is static and not available on object

// Example 2
const PersonConstructor = function (firstName){
    this.firstName = firstName;}
PersonConstructor.hey = function () {
    console.log('Hey there');
};
PersonConstructor.hey();

// Example 3
class PersonClass {
    static greeting() {
        console.log('Good day');
    }
}
PersonClass.greeting();