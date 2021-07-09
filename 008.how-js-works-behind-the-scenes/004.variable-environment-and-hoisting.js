/*
    Link1: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648493#questions
    Link2: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648495#questions

    Hoisting makes some types of variables accessible/usable in the code before they are actually declared.

    Before execution the code is scanned for variable declarations and for each variable a property is created
    in the Variable Environment(VE) Object

    Behaviours of various constructs on hoisting:

    1. Function declarations -> See example 3
    Hoisted: Yes
    Initial Value: Actual Function
    Scope: Block (Strict Mode - otherwise loose scoped)

    2. var variables
    Hoisted: Yes
    Initial Value: undefined (Weird but true) -> See example 1
    Scope: Function

    3. let and const variables
    Hoisted: No
    Initial Value: uninitialized <Temporal Dead Zone>
    Scope: Block

    4. Function expressions -> See example 3
    Hoisted: Depends on whether they are declared with let or var

    Temporal Dead Zone is the area of the code where let or const are inaccessible -> See example 2

    Why TDZ?
    Makes it easier to avoid and catch errors
    Makes const variables work as expected

    Why Hoisting?
    This concept was created when Javascript was first developed as language. It was not anticipated at
    that time that JS would grow to be so huge, hence the inconsistencies. They persisted and now the
    inconsistencies cannot be removed.
    Using functions before actual declaration
    var hoisting is just a byproduct of function hoisting

    The only function that you can use before declaring is the function declaration

    Variables declared with let and const in the global scope do not attach themselves to the global object(window)
 */


// Example 1
console.log(me) // Gives undefined
console.log(you) // throws error

var me = 'andy'
let you = 'jonas'

// Example 2
function temporalDeadZone() {
    if(true) {
        // start of TDZ for const named user
        console.log('hello user')
        let age = 10
        age = age + 10
        // end of TDZ for const named user
        const user = 'andy'
    }

}

// Example 3
console.log(addDecl(2, 3)); // Works

console.log(addExprVar(2, 3)); // throws error saying addExprVar is not a function -
                                    // because it is a hoisted var holding a value of undefined

console.log(addArrowConst(2,3));// throws error saying cannot access addExprConst before initialization -
                                     // because it is a const and being accessed in the TDZ


console.log(addArrowVar(2, 3)); // throws error saying addArrowVar is not a function -
                                      // because it is a hoisted var holding a value of undefined

console.log(addArrowConst(2,3));// throws error saying cannot access addArrowConst before initialization -
                                      // because it is a const and being accessed in the TDZ


function addDecl(a, b) {
    return a + b;
}

var addExprVar = function (a, b) {
    return a + b;
};

const addExprConst = function (a, b) {
    return a + b;
};

var addArrowVar = (a, b) => a + b;

const addArrowConst = (a, b) => a + b;
