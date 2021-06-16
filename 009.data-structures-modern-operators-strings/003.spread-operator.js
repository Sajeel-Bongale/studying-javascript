/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648535#announcements

    Spread operator helps to unpack all the array objects at once -> See Example 1

    Spread operators are useful in places where you would write values separated by commas. (eg function calls)
    Because that is essentially what the spread operator outputs -> See example 6

    Spread operators can be used to create shallow copies of arrays or objects. -> See example 3

    It can also be used to combine or merge two or more arrays/objects -> See example 4

    Spread operators can used on all iterables. -> See example 5
    Iterables are arrays, sets, strings, maps BUT NOT objects
    However after 2018 objects can also work with spread operators. -> See example 7
    But remember that objects are not iterables.

    Add new values to arrays -> See Example 2

 */

// Test Setup
function orderPasta(ingredient1, ingredient2, ingredient3) {
    return `Here's your pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}

// Example 1
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

// Example 2
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Example 3
const mainMenuCopy = [...restaurant.mainMenu];

// Example 4
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Example 5
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // Outputs ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str); // Outputs 'J', 'o', 'n', 'a', 's'


// Example 6
const ingredients = [
    'cheese', 'corn', 'zucchini'
];
console.log(ingredients);
orderPasta(ingredients[0], ingredients[1], ingredients[2]);
orderPasta(...ingredients);


// Example 7
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
// This example creates shallow copies of the objects
