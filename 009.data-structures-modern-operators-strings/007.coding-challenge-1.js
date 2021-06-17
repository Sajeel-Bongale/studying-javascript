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
const [players1, players2] = game.players
console.log(players1, players2)

// solution 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers)

// solution 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// solution 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// solution 5
const {team1, x: draw, team2} = game.odds;
console.log(team1, team2, draw);

// solution 6
function printGoals(...players) {
    players.map(player => console.log(player));
    console.log(players.length);
}

printGoals(...game.scored);

// solution 7
team1 < team2 && console.log('Team 1 is more like to win');
team1 > team2 && console.log('Team 2 is more like to win');
