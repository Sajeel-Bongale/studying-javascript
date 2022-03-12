/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648909#overview

    Internationalization allows us to easily format numbers and strings according to different languages.
    Using this we can make our application support different languages around the world.

    Internationalization allows you to manipulate dates according to how they are represented in a particular
    country or zone.

    To do so you need to use the Internationalization API provided by JS. There is an Intl namespace which holds
    multiple methods that allow you to change and modify dates. One such method is DateTimeFormat which takes the
    locale as an argument. There are many different locales that represent each part of the world. The DateTimeFormat
    creates a formatter on which you can call the format method. You will pass the date that you want formatted as an
    argument to the format method. -> See example 1

    The formatter function takes a second argument, options, which you can use to further customize how you want
    to output the date. This object takes each of the day, date, month, year, hour, minute properties to which
    you can apply values such as numeric, long, short, 2-digit, etc and that will accordingly format your
    resulting date. -> See example 2.

    In some cases it is better to extract the locale from the user's browser and automatically set that as the
    intended locale. -> See example 3

 */

// Example 1
const now = new Date();
const intlDate = new Intl.DateTimeFormat('en-US').format(now);
console.log(intlDate); // formats date in English according to the US standards

// Example 2
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
}
const descriptiveIntlDate = new Intl.DateTimeFormat('en-GB', options).format(now);
console.log(descriptiveIntlDate); // prints date according to description given in options object

// Example 3
// const locale = navigator.language; // navigator only available in browsers
