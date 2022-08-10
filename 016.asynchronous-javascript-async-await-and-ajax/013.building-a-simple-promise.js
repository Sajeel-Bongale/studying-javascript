/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649357#overview

    We will build a promise in this section. We will simulate it with the help of a lottery example. To win the
    lottery means to resolve a promise and to lose means to reject it.

    We create a new promise using the promise constructor. Promises are essentially just a special kind of object
    in JavaScript. The promise constructor takes exactly one argument, the so called executor function. -> See example 1

    As soon as the promise constructor runs, it will automatically execute this executor function that we pass in.
    And as it executes this function, it will do so by passing in two other arguments. Those arguments are the
    resolve and reject functions.

    This executor function that we specified here is the function which will contain the asynchronous behavior that
    we're trying to handle with the promise. This executor function should eventually produce a result value.

    In our lottery example, let's say that we win in 50% of the cases and to lose in the other 50%.

    We generate a random number between 0 and 1, and if this number is greater or equal than 0.5, then we say that we
    win the lottery. We will, therefore, call the resolve function. This is where this resolve function that was passed
    into the executor function comes into play. Calling it implies a fulfilled promise. In order to set the promise as
    fulfilled, we use the resolve function.

    Into the resolved function we pass the fulfilled value of the promise which can later be consumed with the
    then method. Again, whatever value we pass into the resolve function is going be the result of the promise
    that will be available in the then handler. -> See example 2

    For the opposite case we want to mark this promise as rejected. In the reject function, we pass in the error message
    that we later want to be able to get in the catch handler. -> See example 3

    As you see that this promise is eventually going to move to either the fulfilled state or the rejected state.
    We always need to make sure that the promise ends up in one of these two states.

    Now we will consume the promise that we built. We do this just like we consume any other promise -> See example 4
    As we keep rerunning this example , we should then see these different states the promise will be settled in
    according to this random number that was generated.

    However, right now this is not really asynchronous yet. Let's actually simulate this lottery draw by adding a
    simple timer. -> See example 5

    By adding the timer, we have now created some asynchronous behaviour in a promise, which is the whole point of
    using them.

    In practice, most of the time all we actually do is to consume promises. We usually only build promises to wrap
    old callback based functions into promises. This is a process that we call promisifying.

    We will create a promise out of a setTimeout function by creating a wait function. -> See example 6
    Inside this wait function we will take the seconds to wait as an argument and return a new promise. -> See example 7
    In this case we don't need a reject function because a timer cannot fail.

    Now we consume this promise by calling the wait with a 3 second parameter and call the then method on
    it. -> See example 8

    There is also two methods that allow you to immediately resolve or reject promises. -> See example 9

 */

// Example 1
let lotteryPromise = new Promise((resolve, reject) => {
    console.log('Lottery draw is happening');
    // Example 5
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            // Example 2
            resolve(' YOU WIN! $$$');
        } else {
            // Example 3
            reject('You lost your money');
        }
    }, 3000);
});

// Example 4
lotteryPromise
    .then((res) => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

// Example 6
const wait = (seconds) => {
    // Example 7
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

// Example 8
wait(3)
    .then(() => {
        console.log('I waited for 3 seconds');
        return wait(2);
    })
    .then(() => console.log('I waited for 2 seconds'));

// Example 9
Promise.resolve("Resolved Promise")
    .then(res => console.log(res));

Promise.reject("Rejected Promise")
    .catch(err => console.log(err));
