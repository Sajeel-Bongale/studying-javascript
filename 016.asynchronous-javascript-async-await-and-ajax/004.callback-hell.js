/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649301#overview

    In the previous section we made multiple AJAX calls in parallel. However, what happens when we want to wait
    for the result of one AJAX call before calling the next one.

    In this section we will create a sequence of AJAX calls such that the next call is made only after the first one
    finishes. For this we will make use of the borders property in the restcountries.com API response and get the
    data about the border country after the first call is complete.

    We will create a method called getCountryAndNeighbourData inside which we will make the first call to get
    country data for portugal. Then using that response we will find the first neighbouring country which
    happens to be spain using the borders property which holds an array.

    This array is a list of country codes and not names of countries. So we first need to find the details of the
    country using its code. The restcountries.com API has another endpoint that fetches that for us.

    Now you see that the request2 call is really dependent on the response of the first API. You will observe that
    we have a new callback inside the existing callback of the first API response.

    This means that we have nested callbacks.

    If we wanted to wanted to do many requests for neighbours, like neighbour of neighbour of neighbour of neighbour of
    some country, then we would end up with multiple callbacks inside of callbacks. For that kind of structure there
    is a name and it is called callback hell.

    Callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence.

    It is easily identified by the triangular nesting pattern in your code.

    The problem with callback hell is that it makes our code look very messy. But even more importantly, it makes
    our code harder to maintain, and very difficult to understand.

 */

// NOTE: The html code for running this example is in the folder
// 016.asynchronous-javascript-async-await-and-ajax/000.asynchronous-javascript

// 004.callback-hell
const getCountryAndNeighbourData = function (country) {

    // AJAX call country 1
    let request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data);

        // Get neighbour country 2
        let [neighbour] = data.borders;

        if(!neighbour) return;

        let request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function (response) {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    });
}

getCountryAndNeighbourData('usa');
