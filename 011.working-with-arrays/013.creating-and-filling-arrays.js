/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648783#overview

    There are many ways of creating arrays.

    We usually define arrays with data manually. -> See example 1

    We can create an array using the new and Array constructor by passing a size argument to it.
    This generates an array with empty items repeated size times. -> See example 2

    Since the array created above contains empty items, you will want to add elements to it.
    To do so, use the fill method and pass in the value that you want the array to be filled with. -> See example 3

    You can pass the start(inclusive) and end(excluding) arguments to the fill method with the
    element to be inserted. -> See example 4

    You can create an array filled with the same values with another method. This method involves using the
    from() static method on arrays.
    The from() method takes an object in which you specify the length property. This determines how
    many elements are going to be present in the array. The second argument is a map function using
    which you can decide what your internal elements are going to look like.  -> See example 5

    The map function is just like your regular map function in which it receives the element at hand
    as the first argument, the index as the second and the array as the third argument.
    Using these values you can create arrays that have complex values. -> See example 6

    The from method is useful for creating arrays from other data structures because of the presence
    of the map method. Any calculations and modifications can be performed in the mapping function.

    Remember to pass an array or an array like data structure as the first argument to the from method.

 */


// Example 1
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));


// Example 2
const x = new Array(7);
console.log(x); // prints [ <7 empty items> ]
// console.log(x.map(() => 5)); // does not do anything

// Example 3
x.fill(1);

// Example 4
x.fill(1, 3, 5);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr); // prints [1, 2, 23, 23, 23, 23, 7]


// Example 5
// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // prints [1, 1, 1, 1, 1, 1, 1]

// Example 6
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // prints [1, 2, 3, 4, 5, 6, 7]

// Practical Example
// Will work in the browser
/*
labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementsUI);
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/
