/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649319#overview

    In this section we learn how to consume promises.

    We will create a getCountryDataUsingPromise method which will use the fetch function to create a promise. Even
    though the promise will start out in a pending state it will, at a certain point, be settled in either a fulfilled
    or in a rejected state. For now let's assume it to be success and that we have a value available to work with.

    To handle this fulfilled state, we can use the then method that is available on all promises. Into the then method,
    we need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled.

    This function will receive one argument once it's called by JavaScript and that argument is the resulting value
    of the fulfilled promise.

    If we log the response object to the console we find that it has properties like status, headers, etc. The main
    data is present in the body property. We see, the body is basically a readable stream. We cannot yet really look
    at the data. In order to be able to actually read this data from the body, we need to call the json method on the
    response. The json is a method that is available on all responses of the fetch method.

    The problem here is that this json function itself is also an asynchronous function. What we need to do now is to
    return this promise from here. Now we need to handle that promise as well. The way we do that is to then call
    another then after the first one.

    Promises do not get rid of callbacks, but they do in fact get rid of callback hell.

 */

// NOTE: The html code for running this example is in the folder
// 016.asynchronous-javascript-async-await-and-ajax/000.asynchronous-javascript

// 006.consuming-promises
const getCountryDataUsingPromise = function (country) {
    /*
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(console.log(data));
            renderCountry(data[0]);
        });
    */


    // Simplified version with arrow functions
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};

getCountryDataUsingPromise('portugal');
