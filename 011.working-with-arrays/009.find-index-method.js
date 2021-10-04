/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648769#overview

    The findIndex method works almost the same way as the find, the only difference is that the findIndex method
    finds and returns the index of the first element that matches the search criteria. -> See example 1

    It can be used in conjunction with the splice method to delete elements from an array. -> See example 2
 */

const { movements } = require('./000.setup-data');

const movementsCopy = [...movements];

console.log(movementsCopy); //prints
// prints [
// 200,  450, -400,
//     3000, -650, -130,
//     70, 1300
// ]

// Example 1
const movementOverThreeHundred = movementsCopy.findIndex(item => item > 300)
console.log(movementOverThreeHundred); // prints 1 (for value 450)

// Example 2
movementsCopy.splice(movementOverThreeHundred, 1);
console.log(movementsCopy)
// prints [
// 200, -400,
//     3000, -650, -130,
//     70, 1300
// ]