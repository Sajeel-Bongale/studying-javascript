/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648663#overview

    When you create an object such as the lufthansa object with a method on it(book), you can call
    that method using the object name. -> See example 1

    What if you want to use the same method on a different object like the eurowings?

    You can create a copy of the method and store it in another variable and then call it. -> See example 2
    However, this does not work and throws an error as the function now being called does not have
    its own this. That is why it fails.

    How do we tell JS that we want to create a booking on the new eurowings object?
    We can tell JS what the this keyword should look like explicitly.

    If we want to book a Lufthansa flight, the this keyword should point to Lufthansa
    but if we want to book a eurowings flight, then the this keyword should point to eurowings.

    We can use call, apply or bind methods to achieve this.

    See example 3 for the call method. The first argument is the this value that the function
    needs to assume. The subsequent values are the arguments to the original function.

    The only difference in the appy method is that it takes an array as the second argument,
    inside which you can pass all the arguments that the function takes. -> See example 4

    apply method is not usually used anymore because we can use the spread operator now. -> See example 5

 */

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

// Example 1
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};


// Example 2
const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');


// Example 3
// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');


// Example 4
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss); // prints George Cooper booked a seat on Swiss Air Lines flight LX583

// Example 5
book.call(swiss, ...flightData);