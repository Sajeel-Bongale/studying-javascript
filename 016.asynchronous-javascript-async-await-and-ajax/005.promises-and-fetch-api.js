/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649313#overview

    In this section we will learn a new technique that JS provides us to avoid callback hell called promises.

    To get a promise in JS to make HTTP requests we use the fetch API.

    To use fetch, we simply call the fetch method and pass it the url. The fetch function takes other arguments as
    well, but for a simple get call, all we need is the url. If we capture the response of this request and print it
    immediately, we can see that it says Promise {<pending>} indicating that the response is an object of type Promise
    and that its current state is pending.

    What is a Promise?
    The formal definition of a promise is that it's an object that is used basically as a placeholder for the future
    result of an asynchronous operation. We can also say that a promise is like a container for an asynchronously
    delivered value or even less formally we can say that a promise is a container for a future value.

    The perfect example of a future value is the response coming from an AJAX call. When we start the AJAX call, there
    is no value yet, but we know that there will be one in the future. We can use a promise to handle this future value.

    What are the advantages of using promises?
    First by using promises, we no longer need to rely on events and callback functions to handle asynchronous results.
    Second, we can chain promises in a sequence of asynchronous operations instead of nesting like we did with callbacks.

    Promises are an ES6 feature and they became available in JavaScript in 2015.

    Promises can be in different states at different times and this is what they call the life cycle of a promise.

    In the very beginning, we say that a promise is pending. This is before any value resulting from the asynchronous
    task is available. During this time, the asynchronous task is still doing its work in the background. When the task
    finally finished, we say that the promise is settled. There are two different types of settled promises and that's
    fulfilled promises and rejected promises. A fulfilled promise is a promise that has successfully resulted in a value
    just as we expect it. For example, when we use the promise to fetch data from an API, a fulfilled promise
    successfully gets that data. On the other hand, a rejected promise means that there has been an error during the
    asynchronous task. In the example of fetching data from an API, an error would be, when the user is offline and
    can't connect to the API server.

    An important thing about promises is that a promise is only settled once. From there, the state will remain
    unchanged forever.

    The different states are relevant and useful when we use a promise to get a result. We call this consuming a promise.
    But in order for a promise to exist in the first place, it must first be built.

    In the case of the fetch API, it's the fetch function that builds the promise and returns it for us to consume.

 */

// NOTE: The html code for running this example is in the folder
// 016.asynchronous-javascript-async-await-and-ajax/000.asynchronous-javascript

// 005.promises-and-fetch-api
let response = fetch('https://restcountries.com/v2/name/portugal');
console.log(response) // prints Promise {<pending>}

