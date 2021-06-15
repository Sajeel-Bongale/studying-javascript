/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648473#overview

    Javascript needs a runtime to execute inside of. Most commonly it runs inside a browser. In that case your
    browser becomes your runtime. When running in Node, node becomes your runtime. Inside this runtime is a
    javascript engine. The engine executes the compiled/interpreted (Just in Time compiled) javascript code.
    Chrome's JS engine is called the V8. It is the same one used by Node. Other browsers use different engines.
    Inside the engine are 3 main components (at least when it comes to browser runtimes)

    1. The Call stack and Heap
    The call stack holds the current execution context placed on top of one another with the most recent
    EC(Execution Context) being placed at the top of the stack. The heap is used for storing objects and acts as the
    memory store for the running program.

    2. Web APIs
    The Web APIs are provided by the browser and help with methods for manipulating the DOM. These APIs are obviously
    different when it comes to Node

    3. Non blocking event loop - Callback Queue
    The Callback Queue holds the callbacks for events and asynchronous activities. Callbacks for events and other async
    activities are  held separately and executed once the main thread becomes free. It is non blocking in the sense
    that it lets the main thread finish its execution and then looks into the Callback Queue to check if any callbacks
    are waiting for execution.

 */
