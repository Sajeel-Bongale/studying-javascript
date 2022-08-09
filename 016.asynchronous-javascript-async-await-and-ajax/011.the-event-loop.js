/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649347#overview

    A JS runtime is a container which includes all the different pieces that are necessary to execute JS code.
    At the heart of every JS runtime is the engine. This is where code is actually executed and where objects are
    stored in the memory.

    JS has only one thread of execution. So it can only do one thing at a time. Other languages like Java can
    execute multiple pieces of code at the same time, but not JS.

    Next we have the web APIs environment. These are some APIs provided to the engine, but which are actually not
    part of the JS language itself. Things like the DOM timers, fetch API, geolocation API, and the like.

    Next, there is the callback queue and this is a data structure that holds all the ready to be executed callback
    functions that are attached to some event that has occurred.

    Finally, whenever the call stack is empty the event loop takes callbacks from the callback queue and puts them
    into call stack so that they can be executed. The event loop is the essential piece that makes asynchronous
    behavior possible in JS.

    If JS is single threaded, how does it handle or appear to handle multiple tasks at once?
    We will learn how the JS concurrency model really works behind the scenes, using all the parts of the JS runtime
    known to us. We will do this by looking at a real code example. -> See example 1

    Let's walk through the code line by line. We start by selecting an image element. Then in the next line we set
    the source attribute of that image to dog.jpg.

    As we learnt before, this will now start to load this image asynchronously in the background. But this time we
    can actually understand what that mysterious background actually is. As you already know everything related to the
    DOM is not really part of JavaScript, but of the web APIs. So it's in the web APIs environment where the
    asynchronous tasks related to the DOM will run. In fact, the same is true for timers AJAX calls and really all
    other asynchronous tasks.

    Had the image been loading in a synchronous way it would be doing so right in the call stack blocking the execution
    of the rest of the code. That is why it does not happen in the call stack. In other words not in the main thread
    of execution.

    If we want to do something after the image has finished loading, then we need to listen to the load event. That's
    exactly what we do in the next line of code. We attach an event listener to the load event of that image and pass
    in a callback function as always. In practice, this means to register this callback in the web APIs environment,
    exactly where the image is loading. And the callback will stay there until the load event is emitted.

    In the next line, we make an AJAX call using the fetch API. As always the asynchronous fetch operation will happen
    in the web APIs environment.

    Finally, we use the then method on the promise returned by the fetch function. This will also register a callback
    in the web API environment so that we can react to the future resolved value of the promise.

    With this, we have now executed all the top level of code. So, all the code that is not inside any callback function
    in a synchronous manner. At this point we have the image loading in the background and some data being fetched from
    an API.

    Now, let's say the image has finished loading and therefore the load event is emitted on that image. What happens
    next, is that the callback for this event is put into callback queue.

    The callback queue is basically an ordered list of all the callback functions that are in line to be executed.

    In this example, there are no other callbacks in the queue yet, but there could be of course. So, if there were
    already other callbacks waiting in line, then this new callback would of course go straight to the end of the queue.
    There it would sit patiently for its turn to be finally run.

    This implies that for timer callbacks, the timers duration that you define is not a guarantee. This is because the
    timer will wait for its duration to elapse, plus it will have to wait for other callbacks ahead of it to be
    executed as per the queue policy. The only guarantee is that the timers callback will not run before its mentioned
    duration. It all depends on the state of the callback queue.

    NOTE: Event listener callbacks like click will also behave in a similar manner and be put in the callback queue.

    Finally its time to learn about the event loop. What the event loop does is it looks into the call stack and
    determines whether it's empty or not. Except of course for the global context. Then if the stack is indeed empty,
    which means that there's currently no code being executed then it will take the first callback from the callback
    queue and put it on the call stack to be executed.

    This is called an event loop tick. So each time the event loop takes a callback from the callback queue we say
    that there was an event loop tick. The event loop has the extremely important task of coordinating between the
    call stack the callbacks in the callback queue. It does the orchestration of this entire JavaScript runtime.

    JS itself has actually no sense of time. That's because everything that is asynchronous does not happen in the
    engine. It's the runtime who manages all the asynchronous behavior. And it's the event loop who decides which
    code will be executed next.

    We still have the fetch function getting data from the AJAX call in the background. This is happening with a promise.
    With promises things work in a slightly different way.

    Let's say that the data has finally arrived and the fetch is successful.

    Callbacks related to promises do not go into the callback queue. Instead, they have a special queue  which is
    called the microtasks queue. What is special about the microtasks queue is that it has priority over the callback
    queue. This means that if at the end of an event loop tick, after a callback has been taken from the callback queue,
    the event loop will check if there are any callbacks in the microtasks queue. If there are, it will run all of them
    before it will run any more callbacks from the regular callback queue.

    Now in our example, since the call stack is empty(after the previous callback for the image load was executed), the
    event loop will look into the microtask queue and pick up our fetch success callback before it looks into the
    regular callback queue and execute it.

    In practice, this means that microtasks can cut in line before all other regular callbacks.

 */

// Example 1
const el = document.querySelector('img');
el.src = 'dog.jpg';
el.addEventListener('load', () => {
    el.classList.add('fadeIn');
});

fetch('http://someurl.com/resource')
    .then(res => console.log(res));
