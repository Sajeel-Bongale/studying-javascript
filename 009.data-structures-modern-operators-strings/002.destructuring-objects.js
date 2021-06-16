/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648527#questions

    Similar to destructuring arrays, you can also destructure objects.

    It unpacks an object without destroying the original object.

    Functionality is very similar to array destructuring and so is the syntax.

    Simple destructuring -> See Example 1
    The constants or lets that you are destructuring into should have the same names
    as the properties mentioned in the objects

    Destructuring with different names from properties -> See example 2 .

    Destructuring with default values -> See example 3

    Mutating variables defined with the same name as in the objects -> See Example 4

    Destructuring nested objects -> See Example 5

 */

// Test Object
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    }

}

//Example 1
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);


// Example 2
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);


// Example 3
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});


// Example 4
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);


// Example 5
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
