/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648585#overview


 */

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// solution 1
for (let [i, player] of game.scored.entries()) {
    console.log(`Goal ${i+1} ${player}`)
}
console.log('\n')

// solution 2
let sum = 0;
for (let odd of Object.values(game.odds)) {
    sum =+ odd;
}
console.log(sum/(Object.values(game.odds).length))
console.log('\n')


//solution 3
for (let [key, value] of Object.entries(game.odds)) {
    let oddsString = game[key] ? `Odds of victory of ${game[key]}: ${value}` : `Odds of draw: ${value}`
    console.log(oddsString)
}
console.log('\n')


// Bonus
let scorers = {};
for (let [i, player] of game.scored.entries()) {
    scorers[player] = scorers[player] ?  ++scorers[player] : 1;
}
console.log(scorers)
