/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648703#overview

    Why do arrays have methods?
    Arrays are also objects themselves. So array methods are simply functions attached to objects.
    They are built in methods that we can see as tools to help with our tasks.

    1. Slice -> See example 1
    Just like strings, arrays also have a slice method. They take a start(inclusive) and end(excluding) parameter.
    If end param is not included it returns an array till the end of the indices.
    You can also use negative values and then it starts from the end of the array.
    It does not mutate the original array.
    Slice can be used to create a shallow copy of the array. Similarly we can use array destructuring.


    2. Splice -> See example 2
    The main difference between slice and splice is that slice does not mutate the array whereas
    splice does. With splice you can get a part out of the original array and then use
    it somewhere while the original array is now a mutated version with those values removed.
    You can remove the last element of the array using splice like arr.splice(-1)

    3. Reverse -> See example 3
    Reverse simply reverse all the items in an array.
    Mutates the original array

    4. Concat -> See example 4
    Used to concatenate 2 arrays

    5. Join -> See example 5
    Used to create a string with all the values, separated by the separator parameter.
 */


let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// Example 1
console.log(arr.slice(2)); // prints [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); // prints [ 'c', 'd' ]
console.log(arr.slice(-2)); // prints [ 'd', 'e' ]
console.log(arr.slice(-1)); // prints [ 'e' ]
console.log(arr.slice(1, -2)); // prints [ 'b', 'c' ]
console.log(arr.slice()); // prints [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); // prints [ 'a', 'b', 'c', 'd', 'e' ]

// SPLICE
// Example 2
// console.log(arr.splice(2)); // prints [ 'c', 'd', 'e' ]
arr.splice(-1); // removes last element
console.log(arr); // prints [ 'a', 'b', 'c', 'd' ]
arr.splice(1, 2); // deletes two items after the first index(inclusive)
console.log(arr); // prints [ 'a', 'd' ]

// REVERSE
// Example 3
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // prints [ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2); // prints [ 'f', 'g', 'h', 'i', 'j' ]

// CONCAT
// Example 4
const letters = arr.concat(arr2);
console.log(letters); // prints [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
console.log([...arr, ...arr2]);  // prints [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]

// JOIN
// Example 5
console.log(letters.join(' - ')); // prints a - b - c - d - e - f - g - h - i - j