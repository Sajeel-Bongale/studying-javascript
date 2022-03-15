/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649093#overview

    To use Object.create method to implement inheritance amongst classes you will first need to create the
    parent class prototype object. You will add the common methods belonging to the parent class in this
    object. You should also create a method similar to a constructor that will initialize the common property
    values in the parent class. -> See example 1

    Then you attach the prototype to a new empty object that you will create using Object.create. -> See example 2

    This implements a single level of inheritance using Object.create.

    To implement multi level inheritance you keep adding prototypes to prototypes of the created
    objects. You will need to create an init method on the StudentProto as you will need to initialize
    an object. In this init method you will call the Person init method in a manner similar to how we
    did in the constructor technique of inheritance, i.e. using the call method. -> See example 3

    This method is rarely used when writing programs, but is actually the one truly reflecting the prototypal
    nature of JS.

 */

// Example 1
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// Example 2
const steven = Object.create(PersonProto); // steven only inherits from Person

// Example 3
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear); // call parent constructor
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`Hi, my name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); // jay inherits from Student as well as Person

jay.init('Jay', 2010, 'Maths');
jay.introduce(); // runs correctly due to proper inheritance
jay.calcAge(); // prints 27
