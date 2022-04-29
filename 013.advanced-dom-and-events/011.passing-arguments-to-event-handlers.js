/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648983#overview

    In this section we want to make the navigation links on the navbar apart from the one hovered over appear faded
    out. To do so we will use the event delegation. We will select the nav element. -> See example 1

    We will attach the mouseover event listener to the nav element. -> See example 2

    Note: The reason we are not using the mouseenter event here is because the mouseenter event does not bubble,
    whereas the mouseover event does bubble up.

    The opposite of mouseover is mouseout and the opposite of mouseenter is mouseleave. We are going to need
    event listeners for these too as we want to undo the effects we did in the mouseover listener.

    Now inside the event listener we will need to identify the exact link that triggered the event. Then we will
    need to identify the siblings and the logo. We will then reduce the opacity of each of the elements that did
    not trigger the event. -> See example 3

    We will now need to bring back the original opacity once the mouse leaves the link. We will undo everything
    in the new event listener by making the opacity 1. -> See example 4

    Since the code is being repeated we can simply create a separate function called handleHover and the variable
    values as arguments. -> See example 5

    Now we want to use this function as the argument to the event listeners. We cannot simply call the function
    as we attach it to the event listener as it immediately executes it and would not behave in the manner that
    we expect it to. -> See example 6

    One possible solution to this problem is to create an anonymous callback function and then call our named
    function with the correct parameters from within it. -> See example 7

    The other solution to this is to use the bind method. With this method we attach the arguments to the this
    keyword of the newly created function. We will use the this keyword to set the value where the arguments
    were expected. -> See example 8

    In a scenario where multiple arguments are expected we can set the this keyword using the bind method as
    above to an object or an array.

    Note: This is only a workaround for passing arguments to the event listener. In reality the event listener
    only accepts one callback and that callback will always receive the event object. Nothing more, nothing
    less. As a way to pass other arguments you need some workaround, the bind method, replacing the this keyword
    with the arguments. Using this way, you need to remember that the this keyword is lost. However, the
    event.target still points to the element which the this keyword pointed to initially. The lost data is
    still accessible elsewhere.

 */

// Example 1
const nav = document.querySelector('.nav');

// Example 5
// The order is odd because of the way the lecture flows.
const handleHover = function (e, opacity) {
    if (e.target.classList.contains('nav__link')) {
        // Example 3
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el !== link) {
                console.log('yes')
                el.style.opacity = opacity;
            }
            logo.style.opacity = opacity;
        })
    }
};

// Example 2
nav.addEventListener('mouseover', function (e) {
    /*if (e.target.classList.contains('nav__link')) {
        // Example 3
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el !== link) {
                console.log('yes')
                el.style.opacity = 0.5;
            }
            logo.style.opacity = 0.5;
        })
    }*/
});

// Example 4
/*
nav.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('nav__link')) {
        // Example 3
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el !== link) {
                console.log('yes')
                el.style.opacity = 1;
            }
            logo.style.opacity = 1;
        })
    }
})
*/

// Example 6
// nav.addEventListener('mouseout', handleHover(e, 1)) // This will not work as we are instantly calling the function

// Example 7
nav.addEventListener('mouseout', function (e) {
    handleHover(e, 1);
});

// Example 8
nav.addEventListener('mouseout', handleHover.bind(1));
