/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648895#overview

    There are 4 ways of creating dates in JS. All of them use the date constructor but take
    different arguments.

    The first way is to use the Date constructor with no arguments. -> See example 1

    The second way is to parse the date from a date string. You can add the date created from the
    previous date constructor from example 1 or pass in a string that holds a date. -> See example 2

    The third way to create a date is to pass the details in the form of numbers as arguments to the date constructor
    each representing the values year, month(zero index), day, hours(24h), minutes, seconds. -> See example 3

    The final way is to pass the unix timestamp representing how many milliseconds have passed since 1st Jan 1970.
    This is known as unix time. -> See example 4

    Dates are special types of objects and they have their own methods.

    To get the year from the date object that you have created you can use the getFullYear method.
    There is also a getYear method but avoid using that. Then there is getMonth method which returns a 0 based month
    value. getDate returns the date and getDay returns which day of the week it is. getHours, getMinutes and
    getSeconds return the hours, minutes and seconds in the date object. -> See example 5

    There is a toISOString method that converts the number into universally accepted ISO format. -> See example 6

    Finally you can get the timestamp from the date object using the getTime() method. It returns the
    unix timestamp which we used in the fourth type of date creation methods. -> See example 7

    To get the current timestamp there is a static method called Date.now.  -> See example 8

 */

// Example 1
const now = new Date();
console.log(now); // prints current date and time

// Example 2
console.log(new Date('2022-02-14T12:42:23.086Z')); // all of these date formats are parsed correctly
console.log(new Date('December 25, 2011'));
console.log(new Date('Dec,25, 2011'));
console.log(new Date('2025,16, Aug'));
console.log(new Date('May 29 2022'));
console.log(new Date('1 05 2022'));


// Example 3
console.log(new Date(2045, 10, 25, 18, 12, 32));

// Example 4
console.log(new Date(0)); // prints 1970-01-01T00:00:00.000Z
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // prints 1970-01-04T00:00:00.000Z -> 3 days after above date

// Example 5
const future = new Date(2045, 10, 25, 16, 25, 33);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// Example 6
console.log(future.toISOString()); // prints time in ISO format

// Exmaple 7
console.log(future.getTime()); // prints time in unix timestamp

// Example 8
console.log(Date.now()); // prints current time in unix timestamp
