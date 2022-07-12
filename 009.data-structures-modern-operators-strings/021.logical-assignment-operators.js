/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/29433404#overview

    Three new logical operators were introduced in ES2021.

    As we have seen previously we can set default values on variables or object properties using the OR (||)
    operator. -> See example 1

    To simplify this task a new operator called logical assignment OR operator has been introduced and it can
    be used as shown below. It does the same thing as example 1. -> See example 2

    This operator still brings in the same problem that the OR operator had as seen in the previous sections.
    Falsy values are treated as such and the default on the right is used even if the left hand value is valid.

    So to solve this issue a new operator called nullish logical assignment operator is introduced. -> See example 3

    Let's say we want to anonymize the names of all the restaurant owners. We want to replace the names of the owners
    with the string ANONYMOUS. To do so we would traditionally use the logical AND operator. -> See example 4

    As you can see the short circuit fails for restaurant1 and since there is no owner the value undefined gets
    set to the owner property. One thing to note is that the owner property did not exist before running this
    statement. It gets generated and assigned a value of undefined. For restaurant2 it assigns the sting ANONYMOUS.

    We can simplify this task using the logical assignment AND operator. -> See example 5
    We observe that using this operator does not create a new property on the object when it did not exist in the
    first place but behaves exactly as expected in the case of restaurant2. This operator performs in a more
    appropriate manner than simply using a logical AND.

 */

// Test Setup
const restaurant1 = {
    name: 'Capri',
    numGuests: 20
}

const restaurant2 = {
    name: 'La Piazza',
    owner: 'Rossi'
}

const restaurant3 = {
    name: 'TacoBell',
    numGuests: 0
}

// Example 1
restaurant1.numGuests = restaurant1.numGuests || 10;
restaurant2.numGuests = restaurant2.numGuests || 10;
console.log(restaurant1.numGuests); // prints 20
console.log(restaurant2.numGuests); // prints 10

// Example 2
restaurant1.numGuests ||= 10; // Does not work in NodeJS v14
restaurant2.numGuests ||= 10; // Does not work in NodeJS v14
console.log(restaurant1.numGuests); // prints 20
console.log(restaurant2.numGuests); // prints 10

// Example 3
restaurant3.numGuests ??= 10; // Does not work in NodeJS v14
console.log(restaurant3.numGuests); // prints 0

// Example 4
restaurant1.owner = restaurant1.owner && 'ANONYMOUS';
restaurant2.owner = restaurant2.owner && 'ANONYMOUS';
console.log(restaurant1); // prints { name: 'Capri', numGuests: 20, owner: undefined }
console.log(restaurant2); // prints { name: 'La Piazza', owner: 'ANONYMOUS' }

// Example 5
restaurant1.owner &&= 'ANONYMOUS'; // Does not work in NodeJS v14
restaurant2.owner &&= 'ANONYMOUS'; // Does not work in NodeJS v14
console.log(restaurant1); // prints { name: 'Capri', numGuests: 20}
console.log(restaurant2); // prints { name: 'La Piazza', owner: 'ANONYMOUS' }
