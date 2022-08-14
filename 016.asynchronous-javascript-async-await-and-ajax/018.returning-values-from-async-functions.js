/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649389#overview

    An async function always returns a promise. If we have an async function like in the previous section. Then if we
    have console logs around that function call which is async. We observe the logs to find that statement 1 and 3
    have a Promise {<pending>} in between the the two logs. -> See example 1

    Since Promise {<pending>} is printed this is proof that an async function runs in the background and does not
    block the other console statements or other code. If we think about this, then it actually makes sense that here
    we get a promise and not the value that we would like to get, which is the string. The reason for that is that
    at this point of the code, JS has simply no way of knowing yet there's a string here that we want because the
    function is still running.

    However, when the promise from this function does settle, it will settle with the returned value which is the
    string. This becomes the fulfilled value of the promise that is returned by the function.

    So, how do we get the value of the promise and print the consoles in order? To do so, we handle the returned value
    from the async function, treat it as a promise and handle it using then. -> See example 2

    In the second example, we are mixing the old and new styles of handling promises. However, if we do not want to
    mix the styles, we will need to use await when calling the async function. This feature is not yet available in
    JS, however, it is being developed and will be available soon. It is called top level await.

    For now, we can wrap our function in an IIFE to get around using the promise syntax. -> See example 3

    This use of IIFE is one of the last remaining use cases where IIFEs can be used. JS has found a way to replace
    nearly all other use cases where IIFEs were needed.

 */

// Setup data
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if(!res.ok) throw new Error('Failed to fetch country data');
    const data = await res.json();
    return `You are in ${data.city}, ${data.country}`;
};

// Example 1
console.log('1: Getting location data');            // prints 1: Getting location data
const city = whereAmI('bhutan');             // prints Promise {<pending>}
console.log('3: Finished getting location data');   // prints 3: Finished getting location data


// Example 2
console.log('1: Getting location data');
whereAmI('bhutan')
    .then(city => console.log(`2: ${city}`))
    .finally(() => console.log('3: Finished getting location data'));


// Example 3
(async function () {
    try {
        console.log('1: Getting location data');
        const city = await whereAmI('bhutan');
        console.log(`2: ${city}`);
    } catch (error) {
        console.log('2: Error');
    } finally {
        console.log('3: Finished getting location data');
    }
})();
