/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648969#overview

    We will see how events work in practice by adding click event handlers to each element in the hierarchy.
    In the handler we will change the background colour of the navigation pane and observe these changes as
    the event bubbles up.

    We will first create a random colour generator. -> See example 1

    Now we will attach our event listeners to the link (Features) in the navigation inside the file 000.setup-data.html
    and then to the parents of that navigation link. -> See example 2

    Once we have verified that it works we can add a random color to the background of each element in the hierarchy
    using the random colour generator function we created in example 1. -> See example 3

    Note: Inside the event listener the this keyword always refers to the element on which the handler is attached.

    What we observe now is that each of the elements that we added the handler on, receives a new random background
    colour.

    Why does this happen?
    As seen in the previous section, as soon as the navigation link is clicked, the event is created at the DOM root,
    or the document element. Then it enters the capture phase where it travels down the DOM and reaches it target
    which is the element with the .nav__link class. It's event handler fires. The event then moves into the bubbling
    phase during which it begins to travel up the DOM firing each of the handlers in the parent elements (.nav__links
    and .nav).

    In essence all three handlers will handle the same event which originated at the .nav__link target.

    What happens if we click the middle element .nav__links ?
    Only the colour of this element and its parent changes. No effect is seen on the .nav__link element. This is
    because the .nav__links element is where the event capture phase ends and the target phase begins. Only the
    event handler for this target and all the elements above it will fire (in the bubbling phase of course). The
    event will not be propagated below this level and hence the event handler for .nav__link element will not fire.

    There is a property on the event object called target. This property represents the element where the event
    originated. This is not the element on which the event handler was attached. -> See example 4

    This is the result of event bubbling.

    To identify the element on which the event handler is currently running, you need to use the currentTarget
    property. -> See example 5

    The current target always equals the this keyword. -> See example 6

    We also have the ability to stop the event propagation using event.stopPropagation method. -> See example 7

    All the above examples describe events in the target and bubbling phase. No handling has been done in
    the capture phase. Handling events in the bubbling phase is the default and usually the capturing phase
    is irrelevant to us. The bubbling phase can also be used for something called event delegation. The same
    cannot be done in the capture phase.

    However, if we do want to handle events in the capture phase we can pass a third parameter to the add event
    listener. This is a boolean value representing the useCapture parameter of the addEventListener method.
    It switches the handling of the event from the bubbling phase to the capturing phase. -> See example 8

    This will result in the nav element event handler to be triggered before the other two as it has been moved to
    the capture phase.

    The only reason capturing is in existence is that in earlier days different browsers implemented event handling
    in different ways. So to keep backward compatibility the features have been kept.

 */

// NOTE: Run the 000.setup-data.html project in the browser to observe the console logs
// Included with the html is the CSS file as well as this JS file


// Example 1
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColour = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
// console.log(randomColour()); // prints rgb(100, 123, 185) with random numbers with every execution

// Example 2
document.querySelector('.nav__link').addEventListener('click', function (e) {
    e.preventDefault();
    // Example 3
    this.style.backgroundColor = randomColour();
    // Example 4
    console.log('LINK: ', e.target); // prints .nav__link element
    // Example 5
    console.log('LINK: ', e.currentTarget); // prints .nav__link element

    // Example 7
    // e.stopPropagation(); // uncomment to see event being stopped at the target itself and not propagate any further
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColour();
    console.log('CONTAINER: ', e.target); // prints .nav__link element
    console.log('CONTAINER: ', e.currentTarget); // prints .nav__links element
    // Example 6
    console.log(this === e.currentTarget); // prints true
});

document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColour();
    console.log('NAV: ', e.target); // prints .nav__link element
    console.log('NAV: ', e.currentTarget); // prints .nav element
},
// Example 8
//true // uncomment to turn on capturing phase
);
