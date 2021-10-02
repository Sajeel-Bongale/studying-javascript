/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648707#overview

    Other than the for...of loop we can use the forEach method to loop over arrays.

    The forEach method takes a callback function.
    It loops over each item and then call this callback every time. It will implicitly pass
    to the item under consideration. -> See example 1

    It is cleaner to write loops using the forEach as compared to other methods.

    forEach pass the element, the index and the original array into the callback function.
    Usually we do not use all these values, but we may need them some times.

    When to use forEach vs for...of?
    One fundamental difference between the two is that you cannot break out of the forEach loop.
    break and continue keywords do not work in forEach.
    

 */


const { movements } = require('./000.setup-data')

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

// Example 1
console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});

