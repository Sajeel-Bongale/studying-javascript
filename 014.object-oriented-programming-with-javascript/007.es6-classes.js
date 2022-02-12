/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649069#overview

    ES6 classes allow you to do the same thing as constructors but with modern syntax.
    Remember that classes in JS do not work like traditional classes in other languages like Java or C++.
    So instead, classes in JS are just syntactic sugar over the prototypal inheritance mechanism
    that allows the use of inheritance in JS.

    We can create a class using the keyword class and  the name of the class. -> See example 1

    You can also create a class expression like a function. See example 2

    Behind the scenes classes are still functions.

    When creating a new class, we create a constructor function like a function inside the class declaration.
    This function is exactly like the constructor function that we saw in the previous sections. This is
    the function that will be called when the new keyword is used. You can similarly pass arguments to
    this function and use the this keyword to assign values to the newly generated object by this
    constructor. -> See example 3

    To add methods to this class we add them below the constructor function. -> See example 4

    Adding such functions inside the class, automatically adds them to the prototype of the
    constructor function.

    You can still explicitly add methods to prototype using the technique mentioned in the
    previous sections. -> See example 5
    So this is proof one more time that the class really just hides the true nature of prototypal
    inheritance in JS.

    Note:
    1. Classes are not hoisted even if they are class class declarations.
    2. Classes are also first class citizens which means we can pass them around like values.
    3. The body of a class is always executed in strict mode.

 */

// Example 1
class PersonClassDeclaration { }

// Example 2
const PersonClassExpression = class { };


// Example 3
class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Example 4
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const jessica = new Person('Jessica', 1996)
console.log(jessica); // prints Person { fullName: 'Jessica', birthYear: 1996 }

// Example 5
Person.prototype.greet = function () {
    console.log(`Hey I am ${this.firstName}`);
};
