/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/24606740#overview
 */

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Expected result
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

flights.split("+").map(flight => {
    let [direction, sourceCode, destinationCode, time] = flight.split(";");

    direction = direction.replace(/_/g, " ").trim();
    sourceCode = sourceCode.slice(0, 3).toUpperCase();
    destinationCode = destinationCode.slice(0, 3).toUpperCase();
    time = time.replace(":", "h");

    displayMessage = `${direction} from ${sourceCode} to ${destinationCode} (${time})`;

    console.log(displayMessage.padStart(50, " "));
});

