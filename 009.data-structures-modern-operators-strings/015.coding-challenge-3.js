/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648605#overview
 */

// Setup data
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// Solution 1
const uniqueEvents = [...new Set(gameEvents.values())];
console.log(uniqueEvents);

// Solution 2
gameEvents.delete(64);
console.log(gameEvents);

// Solution 3
const mins =  90/gameEvents.size ;
console.log(`An event happened on an average every ${mins} minutes`);

// Solution 4
for (let [time, event] of gameEvents.entries()) {
    const prefix = time <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`;
    console.log(`${prefix} ${time}: ${event}`);
}
