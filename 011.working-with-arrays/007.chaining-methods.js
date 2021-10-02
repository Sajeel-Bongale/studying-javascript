/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648751#overview

    Using the last 3 methods we saw before, we can create complex chains of tasks.

    We can filter some items, run conversions on them and then finally perform some aggregation task. -> See example 1

    In the below example we find the total value of deposits in USD from an array of transactions conducted
    in Euros.

    It behaves as a pipeline.
 */

const { movements } = require('./000.setup-data')

const eurToUsd = 1.1;
console.log(movements);

// Example 1
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * eurToUsd;
    })
    // .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); // prints 5522.000000000001