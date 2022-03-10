/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649089#overview

    The class syntax hides a lot of details behind the scenes because they are a layer of abstraction over constructors.

    We can implement inheritance using ES6 classes using two items - extends keyword and super function.

    To implement inheritance between classes you need to use the extends keyword and then extend the parent
    class. -> See example 1

    The extends keyword will link all the prototypes behind the scenes.

    We will of course need the constructors on both the classes. -> See example 2

    Along with that we need to call the constructor of the parent class. To do this we use the super method call.
    This results in the parent's constructor being called. -> See example 3

    If there are no extra properties on the student class apart from the common ones with the parent class,
    we can entirely ignore the child constructor and the objects for the child class will still be created
    properly. -> See example 4

    All methods in the parent class will be correctly inherited into the child objects.

 */

// Example 1
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

class Student extends Person {
    // Example 2
    constructor(firstName, birthYear, course) {
        // Example 3
        super(firstName, birthYear);
        this.course = course;
    }
}

// Example 4
// class Student extends Person {
//
// }
// const joe = new Student('Joe', 2000); // Works perfectly fine without child constructor

