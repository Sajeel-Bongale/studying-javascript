/*
    Link 1: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648593#overview
    Link 2: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648597#overview

    A map is a data structure that we can use to map values to keys.
    So, just like an object data is stored in key value pairs in maps.

    The big difference between objects and maps is that in maps, the keys can have any data type
    whereas in objects, the keys are basically always strings.

    It could even be objects, or arrays, or other maps.

    To add entries to the map use the set method. -> See example 1
    The set method returns the map with the latest addition to it.

    Therefore, we can chain set methods on the map. -> See example 2

    To retrieve elements from the map use the get method. -> See example 3

    You can use any data type as keys in the map. (including booleans)

    To check if an element exists in the map use the has method. -> See example 4

    To remove elements from the map use the delete method. -> See example 5

    To empty the map use the clear method.

    You can use arrays/objects as the map keys, however you have to ensure that
    the same key will be used for retrieving the elements. Otherwise it will return
    undefined. To use the same key, store the array/object in a const variable
    and then use the same variable to set and then get the value from the map. -> See example 6

    To create a map from an object you can use the Object.entries(myObj) as an argument to the
    map constructor since maps are collection of entries (array of arrays). -> See example 7

    Since maps are iterables you can use the spread operator to destructure them.  -> See example 8

 */

// Example 1
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// Example 2
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

// Example 3
console.log(rest.get('name')); // prints Classico Italiano
console.log(rest.get(true)); // prints We are open :D
console.log(rest.get(1)); // prints Firenze, Italy


const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // prints We are closed :(


// Example 4
console.log(rest.has('categories')); // prints true


// Example 4
rest.delete(2);


// Example 5
// rest.clear(); // clears the map


// Example 6
const arr = [1, 2];
rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
console.log(rest.size); // prints 8
console.log(rest.get(arr));


const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);

// Example 7
// Convert object to map
const openingHours = {
    sat: {open: 10, close: 22},
    fri: {open: 8, close: 24},
    thurs: {open: 5, close: 17}
}
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours)); // Creates map using array of arrays
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Example 8
// Convert map to array
console.log('123', [...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
