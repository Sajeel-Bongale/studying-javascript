/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648589#overview

    Sets are iterable data structures in JS which store only unique values (no duplicates).
    Sets can hold values of any data types just like arrays. They can also hold mixed data types.

    To create a set use the new keyword and pass an iterable like an array as an argument
    to the constructor. -> See Example 1

    Strings can also be passed as arguments to sets since they are also iterables. -> See Example 2

    The order of the elements in sets is immaterial.

    To get the size of the set use set.size property -> See example 3

    You can use the has method on the set to check if an element is present in the set. -> See example 4

    To add an element to the set use the add method. -> See example 5

    To delete an element use the delete method. -> See example 6

    There are no indices in the set so you cannot traverse or pull out elements from the set using indexes
    like we do in arrays.

    There's really no need for getting data out of a set. That's because if all values are unique,
    and if their order does not matter, then there is no point of retrieving values out of a set.

    To delete all elements from the set you can use the clear method. See example 7

    Traversing a set can be done using for...of because they are iterables. -> See example 8
    Spread operator can also be used on sets because they are iterables. -> See example 9
 */



// Example 1
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);

// Example 2
console.log(new Set('Jonas'));

console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);


// Example 3
console.log(ordersSet.size);

// Example 4
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Example 5
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

// Example 6
ordersSet.delete('Risotto');

// Example 7
// ordersSet.clear();
console.log(ordersSet);

// Example 8
for (const order of ordersSet) console.log(order);

// Example 9
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log("staffUnique: ", staffUnique);


