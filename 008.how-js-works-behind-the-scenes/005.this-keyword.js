/*
    Link1: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648501#questions
    Link2: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648505#questions

    The this keyword is a special variable that is created for every EC (function).
    It is one of the three components created in the EC. The other two being scope chain and Variable Environment (VE).
    This keyword points to the owner of the function.

    The this keyword is dynamic and it changes based on who or where it is used.
    There are 4 different ways in which this may be used.

    1. Inside methods (Functions attached to objects)
    this refers to the object from within which the method is called. --> See Example 1

    2. Simple function call
    this = undefined (only in strict mode)
    otherwise this points to window object and this can cause bugs.

    3. Arrow functions
    Do not have their own this. this inside arrow functions refers to the this of surrounding function OR lexical this

    4. Event Listener
    this refers to the DOM Element the handler function is attached to

    Important to note that:
    this will never point to the function that we are executing it in AND
    this will never point to the Variable Environment

 */
'use strict' // comment out for example 2


// Example 1
const jonas = {
    name: 'Jonas',
    age: 28,
    calcAge: function() {
        return 2032 - this.age; // this refers to jonas object
    }
}
console.log(jonas.calcAge());

// Example 2
function simpleFunctionCallThis() {
    console.log(this); // logs undefined when strict mode is on AND window object when strict mode is off
}

simpleFunctionCallThis();

// Example 3
const thisArrow = () => {
    console.log(this); // refers to the window obj because it is an arrow and does not have its own this and refers
                      // to the nearest lexical scope which happens to be window in this case
                      // Don't do this. This is disastrous
}
thisArrow();

// Example 4
const andy = {
    age: 20,
    calcAge: () => {
        console.log(this) // Since it is an arrow function this now refers to the parent or lexical scope
                          // In this case it happens to be window object so this is window
                          // Note that in this case rules of arrow functions apply, and not the method inside object
    }
}

andy.calcAge();

// Example 5
function arrowInsideNormalFunction() {

    let arrow = () => {
        console.log(this);  // this inside arrow is not present. it looks for parent(lexical this)
                            // In strict mode functions don't have this so it is undefined.
                            // in sloppy mode this inside functions is window so this inside arrow becomes window
    }

    arrow();
}

arrowInsideNormalFunction();

let foo = {
    name: 'john',
    print: function () {
        console.log(this.name)
    }
}

/*
Memory management using heap


foo.name => 'John'
foo.print = foo.print.bind({name: 'Robin'})
//Function.prototype.bind2
foo.print() => 'Robin'

// NameBuilder().setFirstName('John').setLastName('Doe').build() => 'John Doe'
// NameBuilder().setFirstName('John').build() => 'John'
// NameBuilder().build() => ''*/
