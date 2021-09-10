/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648181#overview

    Im JS there are 5 falsy values 0, '', undefined, null, NaN and of course false itself.

    These values are not false initially but will be converted to false when converting them
    to boolean.

    Objects are truthy values

    JS performs type coercion to booleans in two cases: when using operators and when using if blocks.
 */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// Example 1
let money = 0;
if (money) { // money is coerced to a boolean and since 0 is false, else statement is executed
    console.log("Don't spend it all");
} else {
    console.log("You should get a job")
}