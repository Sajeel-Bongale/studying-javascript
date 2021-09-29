/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648709#overview

    We can loop over maps and sets using the forEach method. -> See example 1

    When looping over maps, the callback receives similar implicit arguments.
    The first argument is the value.
    The second argument is the key,
    The third is the entire map.

    In a set the keys and the values are the same. This is because a set has no index of any sort
    to store its values. So, there exist no key in the set.
    When you run a forEach on a set, you still receive the same implicit arguments as map.
    However, when you print the keys and values, they will hold the same content.

    This signature is used to maintain consistency for forEach methods on different types of objects.

 */

// Map
// Example 1
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});


// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // prints Set { 'USD', 'GBP', 'EUR' }
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${_}: ${value}`);
});
