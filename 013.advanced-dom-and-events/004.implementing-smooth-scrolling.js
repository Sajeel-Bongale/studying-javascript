/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648955#overview

    In this section we will see how to implement smooth scrolling using two techniques.

    First, we will start by selecting the button we want to apply the scroll feature on. Then we
    will select the destination section to which we want the scroll to lead us to. -> See example 1

    We will now add a click event listener on the button. -> See example 2

    Then we will get the co-ordinates of the destination section to which we want to scroll to using
    getBoundingClientRect method. -> See example 3

    The getBoundingClientRect provides information about the size of an element and its position relative
    to the viewport. It has properties like x, y which are the relative distances in px from the left and
    top corner of the viewport respectively. Similarly, there are top, bottom, left and right properties
    as well which indicate its position. Finally, there are also the width and height properties which
    have the size of the element in them . -> See example 4

    We can also obtain how much we have scrolled on a page or how far from the top of the page we have scrolled
    so far using the scrollX and scrollY on the window object. -> See example 5

    There is a provision to get the height and the width of the current viewport. We can do so using
    the clientWidth and clientHeight properties on the documentElement property. -> See example 6

    The reason for extracting these co-ordinates is to tell JS where to scroll to on the button click.

    To implement the scrolling we will need to call the scrollTo method on the window object. This method
    takes two arguments which specify the x and y position of the destination. -> See example 7

    There is, however, an issue with this approach. This approach only works when we have not scrolled at all
    from the first time the page has loaded. If we scroll a little the top co-ordinates of the section element
    change. This is because they are relative to the viewport and not the original documentElement. As a result
    scrolling in this manner is not always reliable.

    The solution to this problem is to add to the relative position of the boundingRectClient of the section, the
    offset value of how much we have scrolled so far which can be obtained using the scrollX and scrollY
    properties as seen above. -> See example 8

    There is an additional feature that you can use to make the scrolling experience better. To do so, you need
    to pass an object to the scrollTo method which has left, top and behaviour properties. To the left and top
    you will pass the same properties that you had passed as arguments, but to behavior you will pass a value
    of smooth. -> See example 9

    There is a modern way of doing the scrolling without having to calculate the values of the rectangles and
    scroll offsets. In this method you simply select the element that you want to scroll to and on that object
    you call the scrollIntoView method and pass in an object with the behavior property. -> See example 10

 */

// NOTE: Run the 000.setup-data.html project in the browser to observe the console logs
// Included with the html is the CSS file as well as this JS file

// Example 1
const btnScrollTo = document.querySelector('.btn--scroll-to');
let sectionOne = document.querySelector('#section--1');

console.log(btnScrollTo);

// Example 2
btnScrollTo.addEventListener('click', function (e) {
    // Example 3
    const s1Coords = sectionOne.getBoundingClientRect();

    // Example 4
    console.log(s1Coords); // prints DOMRect object
    console.log(btnScrollTo.getBoundingClientRect()); // prints DOMRect object

    // Example 5
    console.log(`Current Scroll-> X: ${window.scrollX}   Y: ${window.scrollY}`);

    // Example 6
    console.log(`Height of viewPort: ${document.documentElement.clientHeight}`);
    console.log(`Width of viewPort: ${document.documentElement.clientWidth}`);

    // Scrolling
    // Example 7
    // window.scrollTo(s1Coords.left, s1Coords.top);

    // Example 8
    // window.scrollTo(s1Coords.left + window.scrollX, s1Coords.top + window.scrollY);

    // Example 9
    /*window.scrollTo({
        left: s1Coords.left + window.scrollX,
        top: s1Coords.top + window.scrollY,
        behavior: "smooth"
    });*/

    // Example 10
    sectionOne.scrollIntoView({behavior: "smooth"});

});