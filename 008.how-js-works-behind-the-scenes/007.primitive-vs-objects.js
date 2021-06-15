/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648509#questions

    Primitives are:         Reference Types are:
    Number                  Objects
    Boolean                 Arrays
    String                  Functions
    undefined               and others...
    null
    Symbol

    When primitive values are assigned to variables and you assign the variable to other variables.
    Then you change the first variable, it preserves the values in the copied variable -> See Example 1
    This happens because internally JS puts these variables in the stack.
    It creates an identifier with the name of the variable in the variable environment of the EC
    and attaches an address to it. The address is what points to the value that is being stored, in this case 30.

    It looks something like this

    Call Stack

    Step1 and 2 of example 1
    Identifier      Address         Value
    age        ->   00001           30
    oldAge  points to 00001         30

    Step 3
    Identifier      Address         Value
    oldAge     ->   00001           30
    age        ->   00002           31

    Values assigned once are immutable. To assign a new value means creating a new address and pointing
    the identifier to the new address. (As happens in step 3). That is why the old variable holds the
    copied value while the newly assigned variable holds a new value.

    This does not happen with objects because fundamentally objects are stored in the heap memeory.
    Why? Because objects can be large and will fill up the stack memory quickly if they are stored there.

    When a new object is created it is stored in the heap memory and is given an address. This address is
    referred to in the call stack by the object identifier when it looks up objects.

    When you copy an object to another object, -> See example 2, you simply copy the reference of the address
    in the call stack

    Call Stack                                                  Heap Memory
    Step 1 & 2 of example 2
    Identifier      Address         Value                       Address         Value
    me         ->   00001           D380H                       D380H           {name: 'Jonas', age: 30,}
    friend  points to 00001 points to D380H

    Therefore when you change the value of the object in the heap the changes are reflected
    across all the objects that hold a copy of the referred heap memory address.

    That is why these constructs are called reference values.
    They refer to the address in the Heap memory from the call stack and not from the call stack itself.

    The copy in the way mentioned in step 2 only copies the reference and not the object.

    For copying objects -> See example 5
    Use Object.assign(targetObj, ...sourceObjs) returns the target obj

    This only creates a shallow copy in the sense that it does not copy deeply nested properties.
    For copying deeply nested properties you need a deep copy which can be done by external libraries
    like lodash

 */

// Example 1
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // prints 31
console.log(oldAge); // prints 30

// Example 2
const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

// Example 3
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);  // prints Davis Williams


// Example 4
// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// both print the same value


// Example 5
// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);  // prints the 4 length array
console.log('After marriage: ', jessicaCopy); // also prints the 4 length array
// because shallow copy
