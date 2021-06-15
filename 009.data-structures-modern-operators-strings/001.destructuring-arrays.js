/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648521#questions

    New ES6 concept that allows you to pick and choose what elements you want from the array.

    It unpacks and array without destroying the original array.

    Simple destructuring -> See Example 1

    Destructuring with gaps in between -> See example 2

    Switching Variables using destructuring -> See example 3

    Destructure values from a function call -> See Example 4

    Nested destructuring -> See Example 5
 */

// Test Object
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    openingHours: {
        thu: {
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
    }
}


// Example 1
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); // Original array not destroyed


// Example 2
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


// Example 3
// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);


//Example 4
// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


// Example 5
// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

