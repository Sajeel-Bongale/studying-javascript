/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649379#overview

    In this section we will see how error handling works with async await.

    One issue with async await is that we cannot use it to catch errors because we cannot attach it anywhere. Instead
    we use something called try catch statement.

    Try/catch has been in JS since the beginning. It is not a new feature. Try catch has nothing to do with async/await
    but we can still use it to catch errors in async functions.

    How try/catch works is that we write a try block and include any code that we want to run in it. JS will try to
    run that code. If it fails with an error, the catch block will catch that. -> See example 1

    This prevents the script from failing with an error and also gives us the ability to handle the error as we see fit.

    If there was no error, then everything runs as expected.

    The first example is just a minimal use case for error handling. However, try/catch can be used to handle errors
    that arise due to failed async/await calls.

    We will use the same function as the previous section and we will call it in the try block. Since, we know that
    fetch does not consider a 404 as an error we will use the same logic as we have in one of the previous sections
    to manually create and throw an error in the case the ok property in the response is false.

    This error will now be caught by the catch block. -> See example 2

 */

// Example 1
try {
    let y = 2;
    const x = 3;
    x = 10;
} catch (e) {
    alert(e); // Catches the constant reassignment error
}

const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if(!res.ok) throw new Error('Failed to fetch country data');
    const data = await res.json();
    return data;
};

// Example 2
try {
    let response = await whereAmI(`aabbcc`);
} catch (e) {
    alert(e); // Catches the 404 error resulting from the fetch
}
