/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22664103#overview

    To understand what asynchronous JavaScript code actually is, we first need to understand what synchronous code is.
    Synchronous simply means that the code is executed line by line, in the exact order of execution that we defined.

    Every line of code is executed only after the previous line has completed its execution. So, basically in a sequence.
    Each line of code always waits for the previous line to finish execution.

    Now this can create problems when one line of code takes a long time to run. For example, if we have an alert
    statement in our code which creates this alert window, the window will block the code execution. So nothing
    will happen on the page until we click the OK Button. And only then, the code can continue executing.

    The alert statement is a perfect example of a long running operation, which blocks execution of the code.

    Most of the time synchronous code is fine and makes perfect sense. But imagine that execution would have to wait
    for example, for a five second timer to finish. That would block our UI for 5 seconds and the user would not be
    able to perform any other operation. This is a terrible user experience.

    That is where asynchronous code comes into picture. If you wanted to implement a timer for 5 seconds without
    blocking the execution of the code you would use something called a setTimeout. -> See example 1

    In this example the first line of code is still synchronous. We move to the second line in a synchronous way too.
    But here we encountered the set timeout function, which will start a timer in an asynchronous way.

    This timer will run in the background without preventing the main code from executing. We also register a callback
    function, which will not be executed now. But only after the timer has finished running.

    The callback function is asynchronous JavaScript because it's only going to be executed after a task that is
    running in the background finishes execution. In this case, that is the timer. So the callback gets registered and
    then the code execution moves on to the next line. As a result, the main code is not being blocked and execution
    does not wait for the asynchronous timer to finish its work.

    That's the big difference between synchronous and asynchronous code.

    Now, when the timer finally finishes after five seconds, the callback function will be executed. You will observe
    that this callback runs after all the other code, even though, it doesn't appear at the end.

    NOTE: Callback functions and event handlers alone do not make code asynchronous. Real asynchronous activities like
    downloading an image, making an API call or running a timer cause the asynchronous nature.

    AJAX stands for asynchronous JavaScript and XML. It allows us to communicate with remote web servers in an
    asynchronous way.  With AJAX, we can make an HTTP request to the server which has this data. The server will then
    send back a response containing that data that we requested. This back and forth communication between client and
    server all happens asynchronously in the background.

    API stands for Application Programming Interface. In general terms, and on the very high level of abstraction,
    an API is a piece of software that can be used by another piece of software in order to allow applications to talk
    to each other and exchange information.

    That's true not only for web development and JavaScript, but for programming in general. In JavaScript and web
    development, there are countless types of APIs like the DOM API or the Geolocation API.

    They are called APIs because they are a self-contained piece of software that allow other pieces of software to
    interact with them.

    The X in AJAX there stands for XML. XML is a data format which used to be widely used to transmit data on the web.
    However, these days no API uses XML data anymore. The term AJAX is just an old name that got very popular back in
    the day and so it's still used today. Most APIs these days use the JSON data format.

 */

// Example 1
const p = document.querySelector('p');
setTimeout(() => {
    p.textContent = 'My name is Jonas';
}, 5000);
p.style.color = 'red';
