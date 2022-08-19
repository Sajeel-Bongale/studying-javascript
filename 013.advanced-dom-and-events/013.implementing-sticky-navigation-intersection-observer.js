/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648993#overview

    What is the Intersection Observer API?
    The Intersection API allows our code to observe changes to the way a certain target element intersects another
    element, or the way it intersects the viewport.

    To use the intersection observer API, we need to start by creating a new intersection observer. To this we will
    have to pass a callback function and an object of options. -> See example 1

    We will store this value in a variable called observer. Then we will use this object to observe a certain target.
    For this we will call the observe method on the observer and to it we will pass the target that we want to
    observe. -> See example 2

    The options that you can pass to the intersection observer contain a property called root. This root is the element
    that the target is intersecting. If we set the value of the root as null it indicates that we will be able to
    observe our target element intersecting the entire viewport.

    Second, we can pass a threshold property to the options.  This is the percentage of intersection at which the
    observer callback will be called. We will set it to 10% for starters. We can also have multiple thresholds set
    using an array. -> See example 3

    Now the callback function will get called each time the observed element(section1), is intersecting the root
    element at the threshold that we defined. That's no matter if we are scrolling up or down. This function gets
    called with two arguments, entries and observer. The entries are an array of the thresholds. We can loop
    through it and see what it holds. -> See example 4

    When you observe the logs you will find many properties in the entry object. Two of them are of most concern.
    The intersectionRatio defines the percentage at which the intersection callback was triggered. Second, there is
    an is an isIntersecting boolean property which helps identify if the target was currently intersecting when the
    callback fired. This is useful because the intersection callback fires both times when the user scrolls up as
    well as down as mentioned previously. So we may want to perform an operation such as an API call when the user
    scrolls down and brings the target content into view. But we may not want to make the API call when the user
    is scrolling back up to the top of the page.

    A threshold of 0 means that the callback will be called when the element has left the viewport in its entirety,
    while a threshold of 1 means that the callback will be triggered when the element is completely inside the
    root element. If the element is larger than the viewport, the callback will never be triggered.

    Lets now use the intersection observer to implement sticky navigation on the bankist website.

    We will display sticky navigation when the header is completely out of view. -> See example 5

    We will use the isIntersecting property to determine when to remove and add the sticky class to the nav
    element. -> See example 6

    We can also make the nav bar sticky some time before the target reaches the mentioned threshold. To do so, we
    use a property called rootMargin in the options object. This takes a string with a value in px. This value
    defines when the observer should fire but with the specified margin space. -> See example 7

    We can also get the 90px height by using the getBoundingClientRect method on the nav object to make the margin
    dynamic. -> See example 8

    The intersection observer technique is much more efficient than the scroll method shown in the previous section.

 */

const section1 = document.getElementById('section--1');


const observerCallback = function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
    });
}

// Example 3
const observerOptions = {
    root: null,
    threshold: 0.1 // Can be set to [0.1, 0.9]
}

// Example 1
let observer = new IntersectionObserver(observerCallback, observerOptions);

// Example 2
// observer.observe(section1);

// Example 5
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);
    // Example 6
    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

let headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    //rootMargin: '-90px' // Makes the callback trigger 90px before the header ends (90px is height of nav)
    rootMargin: `-${navHeight}px` // Makes the callback trigger 90px before the header ends (90px is height of nav)
});
headerObserver.observe(header);
