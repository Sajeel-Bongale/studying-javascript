/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649045#overview

    Each and every function in JavaScript automatically has a property called prototype.

    And that includes, constructor functions.

    Every object that's created by a constructor function will get access to all the methods and properties
    that we define on the constructors prototype property. -> See example 1

    We can add new methods on this prototype object. -> See example 2

    Any object has access to the properties and methods declared on the prototype.

    We can confirm this by showing that every object of the Person class has a property called
    __proto__ on it that has the prototype of the class attached to it. -> See example 3

    This __proto__ is set in the 3rd step of the new keyword usage as mentioned in the last section.

    We can also set properties on the prototype and not just methods. -> See example 4

*/

const Person = function (firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

// Example 1
Person.prototype;

// Example 2
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

const jonas = new Person('Jonas', 1991);

jonas.calcAge();

// Example 3
console.log(jonas.__proto__);

// Example 4
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species)

