/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648573#overview

    When it comes to using OR and AND operators as short circuiting operators, it can lead to certain errors which are
    highlighted in the chapter 005.short-circuiting.js

    To solve this issue, JS came out with the optional chaining operator in JS2020. This can be used to avoid the issues
    of falsy values resulting in unwanted results.


    The optional chaining operator lets you check if a property on an object exists before trying
    to access the next item in the property chain. -> See example 1
    It checks if mon exists before trying to access the open property.

    It acts like a short circuiting operator by returning an undefined
    when a property that you are trying to access is not present on the object

    You can use it to find items in array if they exist and then perform some logic on them. -> See example 2
    Here it is used in conjunction with the nullish coalesce operator to return a suitable value when the
    value on the left evaluates to undefined or null.

    Optional chaining can be used on functions too. -> See example 3

    Optional chaining can be used on arrays  too. -> See example 4

    Remember to use the optional chaining in conjunction with the nullish coalesce to avoid
    unnecessary errors returned when properties are undefined.

 */

// Test Setup
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        sat: {
            open: 12,
            close: 23
        }
    }
}

if (restaurant.openingHours && restaurant.openingHours.mon) // the older way to prevent chaining errors
    console.log(restaurant.openingHours.mon.open); // since mon doesn't exist earlier it could throw an error
// console.log(restaurant.openingHours.mon.open);

// Example 1
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);


// Practical - Example 2
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Example 3
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Example 4
// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
