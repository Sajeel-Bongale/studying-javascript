/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648547#announcements

    Logical operators can
    1. Use any data type
    2. Return any data type
    3. Can be used for short circuiting


    OR || Operator -> See Example 1
    OR operators return the first truthy value encountered or the last value in the chain of operators if all are falsy

    Use case of OR is to set default values -> See Example 2

    AND && Operator -> See Example 3
    AND operators short circuit at the first falsy value and return them immediately. If all values are true
    it returns the last value in the chain

    Use case of AND is to execute code if first is true -> See Example 4

 */

// Test Setup
const restaurant = require('./000.setup-data')


// Example 1
console.log('---- OR ----');
console.log(3 || 'Jonas'); // prints 3
console.log('' || 'Jonas'); // prints 'Jonas;
console.log(true || 0); // prints true
console.log(undefined || null); // prints null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // prints 'Hello'

// Example 2
restaurant.numGuests = 0; // comment this out to test the default feature using ||
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // prints 10
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // prints 10


// Example 3
console.log('---- AND ----');
console.log(0 && 'Jonas'); // prints 0
console.log(7 && 'Jonas'); // prints 'Jonas'
console.log('Hello' && 23 && null && 'jonas'); // prints null

// Example 4
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // order pizza does not exist so it will not call the function
