/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648987#questions/14629984

    The scroll event is available on window object. We can add an event listener for scroll on this object. This
    method is not the most efficient as it will fire every time the user scrolls on the page. It becomes very
    expensive very quickly when the user scrolls rapidly.

    For the purpose of demonstration we will see how the scroll event works. -> See example 1

    Inside this scroll event we will find the scroll location in terms of Y coordinates as we learnt
    earlier. This tells us how far from the top of the page the user has scrolled. -> See example 2

    Now, to implement smooth scrolling we need to identify the position where we want to make the nav
    bar sticky. We will select the the beginning of the first section.

    We could hardcode the value of the start position of section-1 but that will not work because the
    value for this varies based on the viewport. On different screens, the value will be different and
    hence the sticky nav will appear incorrectly on different devices.

    We can however, programmatically identify the start position of this section. -> See example 3

    Then, we can add the sticky class if the scrolled position of Y is greater than the top coordinates
    of the section element start. Otherwise we will remove it. -> See example 4

    This method however, is not the most performant. As mentioned previously the scroll event triggers every
    time the user scrolls on the page. We should avoid using this approach. We will look at a better approach
    in the next section.

 */

const nav = document.querySelector('.nav');
const section = document.getElementById('section--1');

// Example 3
const initialCoords = section.getBoundingClientRect();

// Example 1
window.addEventListener("scroll", function (e) {
    // Example 2
    console.log(window.scrollY);

    // Example 4
    if (window.scrollY > initialCoords.top) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
