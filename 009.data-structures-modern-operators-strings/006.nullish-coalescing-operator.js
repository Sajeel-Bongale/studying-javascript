/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648553?start=15#overview

    The nullish coalescing operator helps prevents the errors that happen when you use logical
    OR for the purpose of short circuiting.

    When using the short circuit operator, false values like 0 and '' evaluate to false and hence
    could lead to potential errors even when they could be valid values in certain scenarios. -> See example 1

    This problem is solved by the nullish coalescing operator which moves to the next value
    in the chain only if the value on the left is undefined or null. -> See example 2
 */

// Example 1
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // this returns 10 even though 0 is a valid value for numGuests
console.log(guests);

// Example 2
// The Nullish Coalescing Operator
// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10; // when numGuests is 0 it sets the const to 0, if undefined it will set to 10
console.log(guestCorrect);
