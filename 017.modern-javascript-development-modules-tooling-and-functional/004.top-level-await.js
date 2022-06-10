/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/29433458#overview

    Starting with ES2022 we can now use top level await statements outside of functions in modules. This was not
    the case earlier as we could not use top level awaits.
    
    To make use of them we will make a fetch api call. -> See example 1
    NOTE: This is a new feature and will not work in versions of Node older than 14.8.

    One thing that we need to understand is that, even though this feature is useful, it blocks the rest of the module
    from executing until the fetch call completes.

    This behaviour, that a top level call can block the processing of the entire module was never possible before and
    is being seen for the first time in JS.

    One important implication of using top-level await is the fact that if one module imports a module which has a
    top-level await, then the importing module will wait for the imported module to finish the blocking code.

*/

// Example 1
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
