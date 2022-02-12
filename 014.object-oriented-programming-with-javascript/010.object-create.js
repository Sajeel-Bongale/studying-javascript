/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649081#overview

    There is a third way to implement prototypal inheritance in JS. We have seen the two in the last
    few sections. The third way is done using the Object.create method.

    With Object.create, there is still the idea of prototypal inheritance. However, there are no prototype
    properties involved, no constructor functions, and no new operator.

    Instead, we can use Object.create to manually set the prototype of an object, to any other object that we want.

    To use this way we need to first create an object which will be the prototype for our instances. -> See example 1

    Then you create a new object using Object.create, to which you will pass the prototype created above.
    This generates an empty object, but one with the __proto__ property of the object set to
    PersonPrototype. -> See example 2

    Finally you can add properties on this object manually or programmatically(using another) functions
    and then populate it according to your needs. The methods on the prototype will be available
    for the object to call. -> See example 3

 */

// Example 1
const PersonPrototype = {
    calcAge() {
        console.log(2037 - this.birthYear)
    }
}

// Example 2
const steven = Object.create(PersonPrototype);
console.log(steven); // prints {} -> no properties apart from __proto__ so far

// Example 3
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // prints 35
