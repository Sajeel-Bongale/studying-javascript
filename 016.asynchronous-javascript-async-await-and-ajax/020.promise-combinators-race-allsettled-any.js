/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649405#overview

    Promise.race is settled as soon as one input promise settles. Settled means either resolved or rejected. It only
    requires one value move ahead, regardless of whether it passed or failed. So in Promise.race, the first settled
    promise wins the race. -> See example 1

    Now these fetch calls will race against each other. If the winning promise is then a fulfilled promise, then the
    fulfillment value of this whole race promise is going be the fulfillment value of the winning promise.

    If you observe the resulting consoles, you will see that the value is the one which was successful first.

    Remember, a rejected promise can also win this race. In that case the result of the promise will be the rejected
    promise. This rejected promise, needs a catch block to be handled as the then cannot handle a rejected
    promise. -> See example 2

    Promise.allSettled was introduced in ES2020. It takes in an array of promises and it will simply return an array
    of all the settled promises. Again, no matter if the promises got rejected or not. This method does not require
    the use of a catch handler as all promises once settled, appear in an resulting array with objects that mention
    the state of the settled promise.

    It is similar to Promise.all but the difference is that Promise.all will short circuit as soon as one promise
    rejects but Promise.allSettled, simply never short circuits. It always returns the settled values for all
    promises. -> See example 3

    Finally, Promise.any was introduced in ES2021. So it is very new. It takes in an array of multiple promises
    and returns the first fulfilled promise. It will ignore rejected promises. Therefore, the results of Promise.any
    is always gonna be a fulfilled promise, unless of course all of them reject. -> See example 4

 */

// Example 1
(async function () {
    let res = await Promise.race([
        fetch('https://restcountries.com/v2/name/chad'),
        fetch('https://restcountries.com/v2/name/iraq'),
        fetch('https://restcountries.com/v2/name/latvia')
    ]);
    const data = await res.json();
    console.log(data[0]); // prints whichever promise settles first
})();


// Example 2
Promise.race([
    Promise.reject('Failure'), // This will happen first
    Promise.resolve('Success 1')
])
    .then(res => console.log(res)) // Will not print as promise is rejected
    .catch(err => console.log(err)); // Will print error as received


// Example 3
Promise.allSettled([
    Promise.resolve('Success 1'),
    Promise.reject('Failure'),
    Promise.resolve('Success 2')
])
    .then(res => console.log(res)); // prints Array  [Success 1, Failure, Success 2] promises.

// Example 4
Promise.any([
    Promise.reject('Failure'),
    Promise.resolve('Success 1'),
    Promise.resolve('Success 2')
])
    .then(res => console.log(res)); // prints Array with Success 1 as resolved promise
