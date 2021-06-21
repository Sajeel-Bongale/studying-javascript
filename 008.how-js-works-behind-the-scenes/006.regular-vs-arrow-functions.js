/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648507#questions

    Never create arrow functions as methods(object literal property functions). This causes the this keyword to refer to
    the lexical scope and therefore, will result in inconsistent and wrong answers.

    Always use regular functions to define methods

    this inside a method refers to an object.
    However, if you create a function inside a method, the this becomes undefined(in strict mode) as it now
    becomes a this of a regular function. To solve that problem pre es 6 -> see solution 1.
    Post es6 we can use arrow functions -> see solution 2.
    With the arrow function the this of the parent is automatically picked up by the inner function solving the problem

    The arguments keyword is available only in regular functions, not in arrow functions

 */


const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);
        // Solution 1
        // const self = this; // self or that  - create a new variable that can be used inside the next function
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();


// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // this is shown as multiple values in the arguments keyword

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8); // does not have arguments keyword
