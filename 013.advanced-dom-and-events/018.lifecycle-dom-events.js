/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649007#questions

    In this section, we will take a look at different events that occur in the DOM during a webpage's life cycle.
    By this we mean right from the moment that the page is first accessed, until the user leaves it.

    The first event that we will describe is called DOMContentLoaded. This event is fired by the document as soon
    as the HTML is completely parsed, which means that the HTML has been downloaded and been converted to the DOM tree.
    Also, all scripts must be downloaded and executed before the DOMContentLoaded event can happen. This event, however
    does not wait for images and other external resources to load. -> See example 1

    In this lifecycle event we can now execute code that should only be executed after the DOM is available.

    The  jQuery equivalent of DOMContentLoaded event is called ready.

    Next there is also the load event and it is fired by the window as soon as, not only the HTML is parsed, but
    also all the images and external resources like CSS files are also loaded. So basically when the complete page
    has finished loading is when this event gets fired. -> See example 2

    Finally the last event that we will look at is the BeforeUnload event, which also gets fired on window. This
    event here is created immediately before a user is about to leave a page. So we can basically use this event
    to ask users if they are 100% sure that they want to leave the page. -> See example 3

    The only time you should prompt the user, if they really want to leave the page is for example, when the user is
    leaving in the middle of filling out the form, or like writing a blog post. So a situation in which data could
    be lost by accident.

 */

// Example 1
document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event);
    console.log('HTML Parsed and DOM tree built');
});


// Example 2
window.addEventListener('load', function (event) {
    console.log(event);
    console.log('Page fully loaded');
});


// Example 3
window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    console.log(event);
    debugger;
    event.returnValue = '';
});
