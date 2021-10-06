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

    You can

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


// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementsUI);
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
