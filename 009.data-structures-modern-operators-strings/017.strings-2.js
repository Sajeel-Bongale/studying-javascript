/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648613#overview

    Strings' cases can be changed by using toLowerCase and toUpperCase methods. -> See Example 1

    Whitespaces can be removed using the trim method. -> See example 2

    Substrings can be replaced with other substrings using replace method. -> See example 3
    Replace replaces only the first occurrence of a substring. To replace all occurrences you can either use
    a regex or use the new replaceAll method.

    Includes, startsWith and endsWith all return booleans and they do as their names suggest: -> See example 4
    Whether a substring exists in a given string
    Whether a string starts with the given substring
    Whether a string ends with the given substring
    respectively
 */


// Working With Strings - Part 2
const airline = 'TAP Air Portugal';
// Example 1
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Practical Examples
// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


// Example 2
// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);


// Example 3
// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
    'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));


// Example 4
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW ARirbus family');
}


// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
