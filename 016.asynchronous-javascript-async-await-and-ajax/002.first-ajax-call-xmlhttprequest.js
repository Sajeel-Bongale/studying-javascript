/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649289#overview

    In this section we are going to build a simple UI about countries and the information about these countries is
    going to be fetched from online APIs.

    To make API calls we are going to start with the most old school one, which is XML HTTP Request or XHR as it
    is commonly known.

    We first create a new XMLHttpRequest and store it in a variable. Now we will call the open method on the request
    object that we created and insert into it what kind of request we want to make as well as the url. Next we will
    send the request by calling the send method on the request object.

    We could have captured the result immediately by getting the response in a variable on the left hand side
    of the request, but we cannot do so. Simply because, the response is not there yet. That is because the AJAX
    call has been sent in the background and the rest of the code continues to run. This is the asynchronous non
    blocking behaviour that was mentioned in the previous section.

    To properly capture the response, we need to register a callback on the load event of the request object. You
    can now see the response logged to the console once it arrives.

    We can convert this data into an object using JSON.parse method.

    We will now show this data on the UI by creating a template literal and filling it up with the values obtained
    from the response. Then we will add the template literal to the DOM.

    We will wrap the entire process in a function to get data for multiple countries in the future.

    If you run the function with different country names and in succession. You will observe that the data appears
    in different orders some time. This shows the asynchronous non blocking nature of JS in action. This happens
    because even though the requests are fired sequentially, the callback handler for that function is fired which
    gets the data first. This causes the change in order of the data to be displayed.


 */

// NOTE: The html code for running this example is in the folder
// 016.asynchronous-javascript-async-await-and-ajax/000.asynchronous-javascript

// 002.first-ajax-call-xmlhttprequest
// XML HTTP Request
const getCountryData = function (country) {
    let request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        renderCountry(data);
    });
}

getCountryData('portugal');
getCountryData('ireland');
