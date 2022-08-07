/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649329#overview

    So far we have always assumed that all our calls will return successfully. However, in real life projects
    this is usually never the case and you are required to handle scenarios that result in errors too.

    A promise in which an error happens is a rejected promise.

    In a fetch based promise, the only way an error occurs is when the user loses his or her internet connection.
    So this is the only error that will be handled.

    To simulate a loss of internet, we can use the Offline setting in network tab of the developer console on Chrome.
    However, we want to simulate the error based on a button click because otherwise the page will never load.

    Once the page has loaded, make the internet offline and then click the button. It will throw a TypeError saying
    failed to fetch. This is the first time, now, that we have encountered an error during an asynchronous API call.
    This is what means that the promise has been rejected. We now need to handle this in our code.

    There are two ways to handle a rejected promise. The first one is to pass a second argument function as a callback
    to the then method. The first callback will be called when the promise is successful and the second one will be
    called when the promise is rejected.

    Once the second argument has been passed you will observe that when there is an error(such as an offline type error)
    it will be caught in the error handler callback and an alert will be generated. This is known as handling or
    catching an error.

    However, since we are making multiple API calls one after the other, then what happens in the case when one
    succeeds and the second one fails? In that case we will need two handlers to handle each of the failed requests.

    If there were multiple chained requests we would need to add multiple callbacks at each of the correct place to
    handle them.

    That is where the second method comes in handy. In the second method you handle all the errors in a central place.
    We can do so by adding a catch at the end of the promise chain after the last then.

    This catch method will catch any error no matter where they occur in the chain.

    In addition to then and catch there is another method called finally that is available on all promises. It takes
    a callback function and this callback is called no matter if the promise succeeds or rejects.

    A good use case of the finally is to stop the loading screens or spinners that you see on websites after the API
    promise has settled.

 */

// NOTE: The html code for running this example is in the folder
// 016.asynchronous-javascript-async-await-and-ajax/000.asynchronous-javascript

// 008.handling-rejected-promises
btn.addEventListener('click', function () {
    // Make the browser offline and then observe the result
    // Uncomment for individual error handling
    // getNeighbouringCountryDataUsingPromisesAndHandleErrorsUsingCallbacks('france');

    getNeighbouringCountryDataUsingPromisesAndHandleErrorsUsingCatch('france');

    // Error scenario for testing
    // getNeighbouringCountryDataUsingPromisesAndHandleErrorsUsingCatch('abcd');
});

const getNeighbouringCountryDataUsingPromisesAndHandleErrorsUsingCallbacks = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json(),
            err => alert(err)) // Handling the error as a second argument to then method
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) return;

            // Country 2
            // Ensure that the new promise is returned from here
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then(response => response.json(),
            err => alert(err)) // Second error handler
        .then(data => renderCountry(data, 'neighbour'));
};


const getNeighbouringCountryDataUsingPromisesAndHandleErrorsUsingCatch = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;

            // Country 2
            // Ensure that the new promise is returned from here
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then(response => response.json()) // Second error handler
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            // Handle all errors in a single place
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};