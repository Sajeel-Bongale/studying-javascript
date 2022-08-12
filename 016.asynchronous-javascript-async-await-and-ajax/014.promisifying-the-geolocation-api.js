/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649363#overview

    In the geolocation API we get the current position by using navigator.geolocation.getCurrentPosition. This
    method accepts two callbacks, one for success and the other for error. -> See example 1

    We will promisify this API. We will create a new promise and attach it to getPosition method. -> See example 2

    As shown in example 1 this method takes two arguments, the success and the error handler. We can simply pass
    two callbacks to it and then with either the position or error received as the implicit arguments we can
    call resolve or reject respectively to settle the promise.

    There is an even simpler way of doing this. Since we know that the the geolocation.getCurrentPosition takes
    two callback functions as arguments and that JS will call these functions by passing in the correct position
    or error object when resolved or rejected, we can only pass the resolve and reject functions as a reference
    to the getCurrentPosition method and JS will do the passing of arguments for us implicitly. -> See example 3

 */

// Example 1
navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
);
console.log("Getting position");

// Example 2
const getPosition = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        err => reject(err)
    );
});
getPosition
    .then(position => console.log(position));

// Example 3
const getPositionSimplified = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
});
getPositionSimplified
    .then(position => console.log(position));
