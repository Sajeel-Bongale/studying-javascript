/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648757#overview

    We can use the find method to retrieve one element of an array based on a condition.

    The find method also accepts a callback function which will then be called as the method loops over the array.

    The find method then retrieves the element from the array.

    Unlike the filter method, the find method will actually not return a new array
    but it will only return the first element in the array that satisfies this condition. -> See example 1

    Using find, we can find an object in the array based on some property of that object. -> See example 2
 */

const { movements, accounts } = require('./000.setup-data')

// Example 1
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal); // prints -400

// Example 2
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
// prints
// {
//     owner: 'Jessica Davis',
//         movements: [
//     5000,  3400,  -150,
//     -790, -3210, -1000,
//     8500,   -30
// ],
//     interestRate: 1.5,
//     pin: 2222
// }
