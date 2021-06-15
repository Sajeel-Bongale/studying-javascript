
/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648479#overview

    The JS EC(Execution Context) is the area that is created when the JS program starts execution. An EC contains

    1. Variable Environment
    It holds the variables declared in this context, functions and arguments

    2. Scope chain
    It contains references to the methods that have called upon the present EC.

    3. this keyword
    Special keyword

    Note: arrow functions do not have this and arguments

    Every EC goes through a creation phase where it looks for variables for hoisting.

    At first the global execution context is created which encompasses the whole file. Then as new functions are called
    each function creates its own EC which gets placed on top of the call stack.

    As the functions continue their execution, new ECs get put on top of the stack. When a function completes its
    execution the EC is popped from the stack and control returns to the previous item in the stack.

    In this way, control eventually returns to the global EC (which is the first EC) that was created.

    The global EC is never popped from the stack as long as the program is running. It is only removed when the program
    stops. Eg. when the browser window is closed.

 */
