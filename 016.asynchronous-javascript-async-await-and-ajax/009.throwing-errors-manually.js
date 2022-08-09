/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649335#overview

    In the fetch API, if a 404 error appears, fetch does not treat that as a real error. The only error fetch
    understands is the offline and disconnection error.

    In this section, we will manually handle the 404 error. If you observe the response for a request that returns
    a 404, you will find that there is an ok property on the response that is set to false with the status as 404.
    This property is true for other responses that return with a 200 or success.

    We can use the fact that this ok is set to false to reject this promise manually. To do so we will throw a new
    Error manually when response is not ok.

    The throw immediately terminates the current function and moves out of the current scope. The creation and
    throwing of an error in any of the then method immediately rejects the promise. The rejected promise will
    then propagate down the then handlers to the catch handler setup at the bottom.

    Remember that any error will cause a promise to reject.

    Why should we handle errors?
    Handling errors is the only way we can display error messages, like the one shown in this example, to the user.
    It is considered a bad practice to leave unhandled promises dangling in the code.

    If you find yourself writing the same error handling over and over again, it would be a good idea to put the
    fetch call, the error handling and the first success in a separate helper function such as the getJson method.

 */

// NOTE: The html code for running this example is in the folder
// 016.asynchronous-javascript-async-await-and-ajax/000.asynchronous-javascript

const getJson = function (url, errorMsg = 'Something went wrong') {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMsg} (${response.status})`);
            }
            return response.json();
        })
}

const throwErrorManuallyOnFailedFetch = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Country Not Found (${response.status})`);
            }
            return response.json();
        })
        .catch(err => {
            // Error thrown above will be caught here
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => countriesContainer.style.opacity = '1')
};

const throwErrorManuallyWithGetJson = function (country) {
    getJson(`https://restcountries.com/v2/name/${country}`, 'Country not found')
        .then(response => console.log(response))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => countriesContainer.style.opacity = 1)
};

// throwErrorManuallyOnFailedFetch('aabbccdd');
throwErrorManuallyWithGetJson('ggffhhjj');