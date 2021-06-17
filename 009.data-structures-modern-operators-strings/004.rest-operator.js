/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648543#announcements

    Rest pattern is exactly the opposite of spread operator.

    It packs everything it receives into an array.

    It can be used for packing into
    Arrays
    Objects -> See Example 3
    Sending arrays into functions as parameters -> Example 4

    The one thing to remember is that the rest operator has to be the last item in use.

    It can also be used only once as it packs THE REST of the items.

    It is used on the left hand side of the assignment(=) operator. -> See Example 1

    It can be used in combination with destructuring(eg leaving holes in between) and
    with spread used on the right side. -> See Example 2

 */

// Test Setup
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thur: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}


// 1) Destructuring
//  Example 1
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


//  Example 2
const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);


//  Example 3
// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// 2) Functions
// Example 4
const add = function (...numbers) { // rest
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x); // spread
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

