/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649327#overview

    We will learn how to chain promises to display neighbouring countries.

    We have already seen how to chain promises in the previous section when we displayed the data by returning
    the response.json() promise outside the first then.

    We will make two API calls in sequence and then chain the response to display the neighbouring countries.

    The then method always returns a promise even if no explicit return is mentioned inside it. However, for
    properly chaining responses it is essential that we mention a value such as a response generated from a
    fetch call as the returned value. This ensures that chaining will work properly.

    Promises allow us to handle these complex asynchronous operations with as many steps as we want. We could
    extend them as much as we want. So even if we wanted the neighbor of the neighbor of the neighbor, we could
    easily do this by chaining all these promises one after another and all without the callback hell.

    NOTE: Ensure that you return a promise from within a then. If you do not, and then simply attach a then to
    the newly created promise, you will end up in a situation similar to callback hell, but with promises.

 */

// NOTE: The code for this example is in the folder
// 016.asynchronous-javascript-async-await-and-ajax/000.asynchronous-javascript
