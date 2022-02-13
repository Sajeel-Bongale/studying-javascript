/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648887#overview

    BigInt is a special type of integer that was introduced in the year 2020.

    We know that numbers are represented internally as 64 bits. That means that there are exactly 64 ones or zeros
    to represent any given number. Now of these 64 bits only 53 are used to actually store the digits themselves.
    The rest are for storing the position of the decimal point and the sign.

    Now, if there are only 53 bits to store the number, that means that there is a limit to how big numbers can be,
    and that number is two elevated to 53 minus one, because the numbers starts at zero. -> See example 1

    The number is also saved as constant on the Number class. -> See example 2

    Any number larger than this number will not be accurately represented in JS. For any use case if we need to
    use such a huge number, for example for a database id or if we are getting such a number from an API
    then we don't have any way to correctly represent them in JS.

    Starting with ES2020 we now have a new primitive value called BigInt to store numbers of any size.
    To make a number to be a BigInt, we simply have to add the letter n to the end of the number. -> See example 3

    Regular mathematical operations on BigInt numbers work the same way as regular numbers. See example 4

    The only problem is that we cannot mix BigInt numbers with regular numbers. -> See example 5
    To solve this we need to convert the regular number into a BigInt using the constructor function.

    The exception to this is comparisons and loose equality checks. Strict equality checks obviously fail
    because they are two different types of numbers. -> See example 6

 */

// Example 1
console.log(2 ** 53 - 1); // the biggest number JS can create

// Example 2
console.log(Number.MAX_SAFE_INTEGER); // the biggest number JS can create

// Example 3
console.log(489132654987131489984932169889412n); // prints 489132654987131489984932169889412n

// Example 4
console.log(489132654987131489984932169889412n + 4932169889412n); // prints 489132654987131489989864339778824n
console.log(489132654987131489984932169889412n * 100000n); // prints 48913265498713148998493216988941200000n

// Example 5
// console.log(2844151564n * 23); // results in an error Cannot mix BigInt and other types, use explicit conversions

// Example 6
console.log(20n > 15); // prints true
console.log(20n == 20); // prints true
console.log(20n === 20); // prints false
