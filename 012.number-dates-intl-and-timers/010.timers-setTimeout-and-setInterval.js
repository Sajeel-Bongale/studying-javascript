/*

    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648919#overview

    JS provides us with two types of timers. One timer runs once after a specified period of time has elapsed
    and the other runs multiple times after a specified duration until we shut it down.

    We can use this to perform activities in the future after a certain time has passed.

    We can simulate the ordering of a pizza using the setTimeout method which runs once after the specified delay.
    We know that a pizza takes time to reach us after we have placed an order. To simulate this we pass a callback
    function to the setTimeout function which will run after the delay in milliseconds. -> See example 1

    It is important to note that the code execution does not stop at this point of time. The statements after the
    setTimeout are executed one after the other. The function passed as a callback is simply put on hold until the
    time period mentioned in the delay argument has expired. Once the time has passed, the callback gets
    executed. -> See example 2

    This behaviour where the console in the further is executed before the callback is known as asynchronous JS.
    The way it works is explained in section 016.asynchronous-javascript.

    One issue when using callback functions is that there is no apparent way in which you can pass arguments
    to the callback function. You can however, do so, by passing these arguments to the setTimeout function
    from the 3rd place onwards. These arguments will be used as parameters when calling the callback
    function. -> See example 3

    You can also prevent timers from running, provided that they have not executed already. There is a clearTimeout
    method that allows you to cancel an in progress timer. This method takes one argument which is the id of the
    timer that you started. This id is obtained as a return value from the setTimeout method. -> See example 4

    The setInterval function allows us to run a function over and over again. You may want to display the current
    time on your website. For this you use setInterval. -> See example 5

    You can similarly clear the interval using the clearInterval method by passing it the interval id. -> See example 6

 */

// Example 1
setTimeout(() => {
    console.log('Here is your pizza'); // prints Here is your pizza after 3 seconds
}, 3000); // 3 seconds is 3000 milliseconds

// Example 2
console.log('Waiting...') // Runs before above pizza callback

// Example 3
setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2} toppings!`);
}, 2000, 'corn', 'spinach');

// Example 4
const ingredients = ['corn', 'spinach']
const timer = setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2} toppings!`); // this will not print as we cancel it
}, 2000, ...ingredients);
if (ingredients.includes('spinach')) {
    clearTimeout(timer);
}

// Example 5
const interval = setInterval(() => {
    console.log(new Date()) // prints current date and time
}, 1000)

// Example 6
setTimeout(() => clearInterval(interval), 5000) // stop after 5 seconds
