/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649085#overview

    To implement real inheritance between two different constructor functions, we need to go through a series of steps.

    We first create a Person constructor, and create a calcAge function on its prototype. -> See example 1

    Then we create the child class which is Student. We also add a new function to its prototype called introduce.
    We see that the Student constructor has two properties which are common with the person class and one unique
    property called course. -> See example 2

    Now we create a mike object using the Student class. -> See example 3

    We observe that the code of Student has some code common with the Person. We know that it is not a good practice to
    repeat code. Secondly, if the code for the Person constructor changes we will need to change the code for Student too.

    To solve this issue we can call the Person constructor from within the Student constructor to avoid code
    duplication. -> See example 4

    However, this results in an error because you are now calling the Person constructor without the new keyword
    thereby, skipping the creation of this keyword within the Person constructor. To get around this we will bind the
    this keyword that has been generated in the Student constructor (by virtue of calling the Student constructor with
    the new keyword), and pass that to the Person constructor. We will actually invoke the call method so that
    the method is executed instantaneously along with the other required parameters. -> See example 5

    This solves the dual problems of not having the this keyword as well as connecting the Student class
    to the Person class from within the Student constructor.

    Now a student is also a Person and we want them to be connected. We want the student class to inherit from
    the Person class. So that all instances of Students will get access to methods in the Person class through the
    prototype chain.

    In essence we want to make the Person.prototype the prototype of the Student's prototype's prototype.
    We will do this using Object.create -> See example 6

    You can manually set the __proto__ of the Student.prototype. This is in fact a better approach than using
    Object.create as it does not destroy the entire Student.prototype object which has other methods
    like the constructor. If you use Object.create, you have to manually set the constructor back to
    the Student constructor to make the chain correct. In this approach it would also keep the other methods
    on the Student prototype intact as we are only changing the __proto__ property of the Student.prototype.
    Prefer using this approach

    We create this connection before adding any methods to the student prototype object. If we do it later
    the Object.create method will return an empty object that will clear(delete) all properties that we have
    set on the prototype and that data will be lost.

    That is why we first attach the parent prototype using Object.create and then add methods to the child prototype.

    In summary,
    1. Create Parent constructor
    2. Create Parent.prototype methods
    3. Create Child constructor
    4. Call parent constructor from with child constructor using the .call method by passing this as first
    argument and all other arguments needed after it.
    5. Do ChildClass.prototype.__proto__ = Parent.prototype -> Very imp for chaining classes
    6. Create Parent.prototype methods

 */

// Example 1
const Person = function (firstname, birthYear) {
    this.firstName = firstname;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

// Example 2
// const Student = function (firstName, birthYear, course) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.course = course;
// };

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// Example 3
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();

// Example 4
// const Student = function (firstName, birthYear, course) {
//     Person(firstName, birthYear);
//     this.course = course;
// };

// Example 5
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Example 6
Student.prototype = Object.create(Person.prototype);
// OR
// Student.prototype.__proto__ = Person.prototype; -> This is a better approach as it does not destroy the original
// prototype object which holds the value for constructor which is lost when using the above approach.
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
