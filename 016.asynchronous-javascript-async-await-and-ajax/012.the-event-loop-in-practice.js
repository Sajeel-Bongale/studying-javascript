/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649351#overview

    Let us see how the event loop works in practice. -> See example 1

    In what order will the consoles be printed?

    As we learnt before, the top level code will execute first and synchronously. This means that the logs
    Test start and Test end will be printed in order 1 and 2.

    However, the timer and promise are a bit tricky. Both the timer and the promise will finish at the same time.

    The timer appears first in the code and so it kind of finished first. So it's callback, will be put on the
    callback queue first. However, does that mean that this callback will be executed first? NO

    That's because of the micro-tasks queue. The callback of the resolved promise will be put on the micro-tasks queue
    and this micro-tasks queue, has priority over the callback queue.

    After this whole code runs, we will have one callback in a callback queue and one in a micro-tasks queue.
    Therefore, the one from the micro tests queue will be executed first (order 3).

    This can sometime result in the regular callback queue being starved of execution because the if a large task
    is being performed in the callback of the promise, then it will keep the callbacks on the regular thread waiting.
    We can also simulate this by running a long loop in the callback of another promise. -> See example 2

    The resolved promise 2 statement will not print until the for loop completes and this in turn will block the
    callback of the timer in the regular callback queue. This is actual proof that these zero seconds that we have
    in the timer are not a guarantee.

 */


// Example 1
console.log('Test start');
setTimeout(() => console.log('0 second timer'), 0);
Promise.resolve("resolved promise 1")
    .then(res => console.log(res));

// Example 2
// Uncomment for testing regular callback starvation
/*Promise.resolve('resolved promise 2')
    .then(res => {
        for (let i = 0; i < 10000000000; i++) {
        }
        console.log(res);
    });*/

console.log('Test end');

// prints
// Test start
// Test end
// resolved promise 1
// resolved promise 2 // waits for a long time for the for loop to finish before statement is printed(if uncommented)
// 0 second timer
