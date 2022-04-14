/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648971#learning-tools

    We will now implement smooth scrolling navigation behavior so that when we click on any of the navigation links
    we will be taken to the corresponding section.

    We will, however do so using two techniques. The first one is the regular way of adding events to each element
    and in the second way we will use event delegation.

    In the first way we will need to select all the navigation links as they appear on the UI and then attach a
    click event handler to them. -> See example 1

    Once attached you will observe that clicking on these links will cause the page to navigate to the correct
    page location as indicated by the links. This is because of the href attributes on the anchor tags.

    We need to prevent this behaviour, so we use the event.preventDefault method. -> See example 2

    Next we will obtain the value from the href attribute as it is the location (element) that we want to scroll
    to. We use the getAttribute method so that we get only the relative path to the element and not the absolute
    URL. -> See example 3

    With the element identified we can now scroll to the element using scrollIntoView with smooth behaviour.

    This approach although correct, does have some limitations on its own. We have to cycle through each and
    every navigation element and add the same handler to each element. This means more memory consumption as
    each handler function takes up space. This approach does not scale well.

    To solve this problem we use event delegation. In this we use the ability of events to bubble up the DOM.
    We do this by attaching an event listener to a common parent of all the elements that had the handlers
    attached to them previously.

    In this demonstration it represents the .nav__links element which is the parent of all navigation links.

    We add an event listener to the common parent. -> See example 4

    Now inside this listener we determine which element the event originated from. You will need to come up
    with a matching strategy to identify the target element. You will also need to keep in mind that the
    click on the parent element will also trigger the handler so that event needs to be ignored. -> See example 5

    We will implement the same logic of preventing default behaviour and scrolling into view here in the handler.

    One good use case of event delegation is when some elements like buttons do not exist on the DOM at start time
    and will need event handlers attached to them. In such cases the event handling can be delegated to the parent
    and whenever the element gets added to the DOM the event will be handled correctly by virtue of the matching
    strategy.

 */

// NOTE: Run the 000.setup-data.html project in the browser to observe the console logs
// Included with the html is the CSS file as well as this JS file

// Regular event handling
// Example 1
/*
document.querySelectorAll('.nav__link').forEach(element => {
    element.addEventListener('click', function (e) {
        // Example 2
        e.preventDefault();
        // Example 3
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: "smooth"});
    });
});
*/

// Event Delegation
// Example 4
document.querySelector('.nav__links').addEventListener('click', function (e) {
    // Example 5
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: "smooth"});
    }
});


