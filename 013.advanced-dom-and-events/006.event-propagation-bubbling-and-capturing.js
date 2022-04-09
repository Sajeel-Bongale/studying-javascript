/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648965#overview

    JS events occur in two phases: capturing and bubbling.

    Imagine a deeply nested anchor tag with a structure like so:
    <a> -> <p> -> <section> -> <body> -> <html>

    Now lets say that a click happens on the anchor link. The DOM then generates a click event right away.
    However, the event does not get generated at the target element, which is the anchor element.

    Instead, it is generated at the root of the document or at the top of the DOM tree. From there, the
    capturing phase begins during which the event then travels down the DOM to the target element. It will
    pass each element in the hierarchy of the <a> element as it traverses.

    As soon as the event reaches the target element, the target phase begins. During this phase we can
    handle these events with the help of event listeners.

    So event listeners simply wait for the event to happen and then as soon as it occurs, it simply runs
    all the attached event handlers.

    After the target phase, the event moves to the bubbling phase. Just like in the capturing phase, the event
    traverses all the target's parents in the reverse order as compared to the capturing phase.

    Why is this important?
    Because it appears as if the event happened in each of the parent elements. What this means is that if we attach
    the same event handler to another element in the hierarchy, say, the section element, then we will get the
    handler being run twice. Once for the anchor and once for the section.

    By default, elements, can only be handled in the target and bubbling phase. However, we can set up listeners
    in a way that they listen for the event in the capturing phase instead.

    Note: Some type of events do not have a bubbling or capturing phase and can only be handled in the target phase.

    We can also say that events propagate which is a different way of saying events capture and bubble.

 */
