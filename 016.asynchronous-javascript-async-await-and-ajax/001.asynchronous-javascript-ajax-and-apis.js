/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22664103#overview

    To understand what asynchronous JavaScript code actually is, we first need to understand what synchronous code is.
    Synchronous simply means that the code is executed line by line, in the exact order of execution that we defined.

    Every line of code is executed only after the previous line has completed its execution. So, basically in a sequence.
    Each line of code always wait for the previous line to finish execution.

    Now this can create problems when one line of code takes a long time to run. For example, if we have an alert
    statement in our code which creates this alert window this alert window will block the code execution. So nothing
    will happen on the page until we click the OK Button. And only then, the code can continue executing.

    The alert statement is a perfect example of a long running operation, which blocks execution of the code.

    Most of the time synchronous code is fine and makes perfect sense. But imagine that execution would have to wait
    for example, for a five second timer to finish. That would block our UI for 5 seconds and the user would not be
    able to perform any other operation. This is a terrible user experience.


 */

