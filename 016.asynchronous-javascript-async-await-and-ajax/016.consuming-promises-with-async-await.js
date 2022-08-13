/*
    Link: udemy.com/course/the-complete-javascript-course/learn/lecture/22649375#overview

    Since ES2017, there is now an even better and easier way to consume promises. It is called async/await.

    We start by creating a special kind of function which is an async function. We do this by simply adding
    the async keyword in front of the function. -> See example 1

    This function is now an asynchronous function. So a function that will basically keep running in the
    background while performing the code that's inside of it. Then when this function is done, it automatically
    returns a promise.

    Now, inside an async function, we can have one or more await statements. These await statements should be
    promise creators, like a fetch function call. -> See example 2

    In an async function like this one, we can use the await keyword to await for the result of this promise.
    Await will stop the code execution at that point of the function until the promise is fulfilled.

    The natural question that comes to mind is, does stopping the code execution not block the work of other code?
    The answer is actually no, in this case, because stopping execution in an async function, which is what we have
    here is actually not a problem because this function is running asynchronously in the background. Therefore, it
    is not blocking the main thread of execution.

    This is exactly what makes async/await special. It makes the code look like regular synchronous code, while in
    fact everything running behind the scenes is asynchronous.

    As soon as this promise is resolved, then the value of this whole await expression that we have is going to be
    the resolved value of the promise. So we can simply store that into a variable called res. -> See example 3

    Async and await is simply syntactic sugar over the then method in promises. Behind the scenes, we are still using
    promises. We are simply using a different way of consuming them here in this case.

    Now once the fetch completes, we can get the json data out of the returned response and then simply add another
    await in front of it to get the data from the ReadableStream. -> See example 4

 */

// Example 1
const whereAmI = async function (country) {
    // Example 2 and Example 3
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    console.log(res);
    // Example 4
    const data = await res.json();
    console.log(data);
};

whereAmI('portugal');

console.log('FIRST'); // prints before the call to whereAmI completes
