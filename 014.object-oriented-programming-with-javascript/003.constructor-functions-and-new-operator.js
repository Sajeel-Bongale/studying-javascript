/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649039#overview

    We can use constructor functions to build an object using a function.

    A constructor function is a normal function. The only difference between a constructor and regular
    function is that we call the constructor function using the new operator.

    Constructor functions always start with a capital letter. -> See example 1

    An arrow function cannot be used as a constructor function because it does not have its own this.

    A constructor function produces new objects.

    The new keyword is a special operator.

    Behind the scenes the use of new keyword performs 4 steps.
    1. A new object {} is created.
    2. The function is called and the this keyword is set to the newly created object from step 1 -> this = {}
    3. {} linked to a prototype
    4. The created object is automatically returned from the function

    We can use the constructor function created in example 1 to create as many instances of the Person
    class as we want. -> See example 2

    Here all the objects are instances of the Person constructor.

    To test that we can use the instanceof keyword. -> See example 3

    All properties defined inside the constructor function are called instance properties.

    You should not create methods inside constructor functions because a new copy of that
    method is provided to every object that is subsequently created. This increases the
    memory usage.

    Instead the methods should be declared on the prototype of the constructor function.
    This ensures that only one copy of the method is shared with each new created instance.

 */

// Example 1
const Person = function (firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

let jonas = new Person('Jonas', 1991);
console.log(jonas);

// Example 2
const matilda = new Person('Matilda', 2017);

const jack = new Person('Jack', 1990);

console.log(matilda, jack);

// Example 3
console.log(jonas instanceof Person);