/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648687#overview

    Running a setTimeout inside a method is an example of closure as the callback function inside the
    setTimeout has access to the variables defined in the parent scope.

    Variables set in closure have priority over values in the scope chain.
 */

// More Closure Examples
// Example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};
const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};
g();
f(); // prints 46
console.dir(f);

// Re-assigning f function
h();
f(); // prints 1554
console.dir(f);


// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);