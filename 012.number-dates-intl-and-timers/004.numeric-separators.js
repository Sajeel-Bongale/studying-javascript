/*

    Link: udemy.com/course/the-complete-javascript-course/learn/lecture/29433416#overview

    Starting from ES2021, we can use a feature called "Numeric Separators" to format numbers in a way that is
    easier for us to read and understand.

    When writing regular text we generally use a separator like comma when representing large words. We usually
    apply these separators at the thousands position. It makes it easier for us to read the word. -> See example 1

    ES2021 introduces something similar to JS. We use the underscore(_) to separate numbers. -> See example 2

    The engine when parsing the number removes the underscores and the number works like a regular integer.

    The underscore must be within the number and not at the extremes or around decimals. -> See example 3

    You should also not have an underscore in a string that you are trying to convert to a number. -> See example 4

 */

// Example 1
// 287,434,000,000 -> Represents 287 billion 434 million.

// Example 2
console.log(287_434_000_000); // prints 287434000000

// Example 3
// console.log(3._1415); // all these result in errors
// console.log(3_.1415);
// console.log(_3.1415);
// console.log(3.1415_);

// Example 4
// console.log(Number('230_000')); // will result in error
