/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648979?start=15#overview

    In this section we will implement a tabbed component on the 000.setup-data.html page. The basic HTML can
    be found in the above file in the element with the class operations.

    All of the content and structure for the tabbed component will reside inside this div element. What we will do
    is hide and show the content as the tabs are clicked.

    First we will select the tab elements, content elements and the tabs container. -> See example 1

    We will now attach event handlers to the parent of tabs which is tabs container. We will do so using
    event delegation. -> See example 2

    When using event delegation we need to find a good element identifying strategy. In this scenario, there
    is a span inside the button and clicking on that span results in the selection of span inside the event
    target and as a result we cannot use event.target as the element selection strategy. We could use select
    the parent. However, this methods fails when clicking on the button.

    The solution to this problem is to use the closest method to select the exact element(the button) from
    within the element target. Closest matches the nearest element or the same element if the selector
    passed to it matches the element itself -> See example 3

    Next we mark the clicked tab with the active class. -> See example 4

    One issue we have is that when we click on the tabs container the event listener code will fail with null
    as it cannot find the closest element with the class operations__tab. We will solve this by adding a guard
    clause to the event listener. -> See example 5

    Since we are adding the class on each selected element, we also need to ensure that the other tabs which
    could be currently active should have the active class removed from upon them. -> See example 6

    Finally we will activate the content area associated with the currently selected tag. We will do so
    using the data tab custom attribute that has been added to the tabs. -> See example 7

    We will have to remove the active class from the content divs just like we did for the tabs.  -> See example 8
 */

// NOTE: Run the 000.setup-data.html project in the browser to observe the console logs
// Included with the html is the CSS file as well as this JS file

// Example 1
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Example 2
tabsContainer.addEventListener('click', function (e) {
    // Example 3
    const clicked = e.target.closest('.operations__tab');

    // Example 5
    if(!clicked) return;
    console.log(clicked)

    // Example 6
    tabs.forEach(t => t.classList.remove('operations__tab--active'));

    // Example 4
    clicked.classList.add('operations__tab--active');

    // Example 8
    tabsContent.forEach(c => c.classList.remove('operations__content--active'))

    // Example 7
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
});


