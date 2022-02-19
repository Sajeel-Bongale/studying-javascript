/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648905#overview

    We can perform operations on dates such as subtracting one date from another.

    To do so we first need to generate two Date objects using the Date constructor. Then we convert them to numbers.
    Passing a date object to a Number constructor or by prepending it with the + sign converts the date into a
    unix timestamp. -> See example 1

    Using these two timestamps we can find out the difference between the two dates in hours, minutes, days or whatever
    time frame we want. -> See example 2

 */

// Example 1
const dateInTimestamp = +new Date();
console.log(dateInTimestamp); // prints time in unix timestamp

// Example 2
const calcDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // method to calculate number of days between two dates

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); // prints 10