/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649397#overview

    Imagine that we wanted to get some data about three countries at the same time, but in which the order that the
    data arrives does not matter at all.

    We will implement an async function that will simply take in three countries and it will log the capital cities
    of these three countries as an array. -> See example 1

    What we did here basically was to run all these Ajax calls one after another, even though the result of the second
    one does not depend on the first one and the result of the third one does also not depend on any of the other ones.

    You can also verify this in the Network tab of the developer console, that each call is happening only after
    the previous one has completed.

    Instead of this, it would be better if we could run all these promises in parallel. To achieve this we use the
    Promise.all combinator. This function takes an array of promises and it returns a new promise which will then
    run all the promises in the array at the same time. -> See example 2

    If you run this and observe the output in the Network tab of the developer console, you will find that all the 3
    calls are made at the same time.

    We need to create another Promise.all combinator to handle the response.json of each promise that has resulted
    from a fetch. -> See example 3

    Now, one important thing to remember here is that if one of the promises rejects, then the whole promise.all
    rejects. So we say that promise.all short circuits when one promise rejects.

    Whenever you have a situation in which you need to do multiple asynchronous operations at the same time and
    operations that don't depend on one another, then you should always run them in parallel.

 */

// Example 1
const get3Countries = async function (c1, c2, c3) {
    try {
        const response1 = await fetch(`https://restcountries.com/v2/name/${c1}`);
        const [data1] = await response1.json();

        const response2 = await fetch(`https://restcountries.com/v2/name/${c2}`);
        const [data2] = await response2.json();

        const response3 = await fetch(`https://restcountries.com/v2/name/${c3}`);
        const [data3] = await response3.json();

        console.log([data1.capital, data2.capital, data3.capital]); // prints Dodoma Talinn Managua
    } catch (e) {
        console.error(e);
    }
};

get3Countries('tanzania', 'estonia', 'nicaragua');


// Example 2
const get3CountriesParallel = async function (c1, c2, c3) {
    const responses = await Promise.all([
        fetch(`https://restcountries.com/v2/name/${c1}`),
        fetch(`https://restcountries.com/v2/name/${c2}`),
        fetch(`https://restcountries.com/v2/name/${c3}`)
    ]);

    // Example 3
    const data = (await Promise.all(responses.map(response => response.json()))).flat();
    const [data1, data2, data3] = data;
    console.log(data1.capital, data2.capital, data3.capital); // prints Dodoma Talinn Managua

};

get3CountriesParallel('tanzania', 'estonia', 'nicaragua');
