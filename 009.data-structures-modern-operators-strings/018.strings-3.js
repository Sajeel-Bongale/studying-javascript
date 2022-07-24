/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648619?start=45#overview

    Use the split method to separate a string into separate strings by passing a separator. -> See example 1

    You can also use it to destructure the split string into separate strings. -> See example 2

    String methods can be combined together for practical applications.

    Strings can be padded at the start and end using the padStart and padEnd methods. -> See example 3

    Repeat can be used to create a new string with the original string repeated. -> See example 4

 */


// Split and join
// Example 1
console.log('a+very+nice+string'.split('+')); // prints [ 'a', 'very', 'nice', 'string' ]
console.log('Jonas Schmedtmann'.split(' ')); // prints [ 'Jonas', 'Schmedtmann' ]

// Example 2
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Practical example
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // prints Mr. Jonas SCHMEDTMANN
const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis'); // prints Jessica Ann Smith Davis
capitalizeName('jonas schmedtmann'); // prints Jonas Schmedtmann

// Example 3
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); // prints ++++++Go to gate 23!++++++++++
console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); // prints +++++++++++++++Jonas++++++++++
const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836)); // prints ****7836
console.log(maskCreditCard(43378463864647384)); // prints *************7384
console.log(maskCreditCard('334859493847755774747')); // prints *****************4747

// Example 4
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5)); // prints Bad waether... All Departues Delayed...  repeated 5 times
const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5); // prints There are 5 planes in line �����
planesInLine(3); // prints There are 3 planes in line ���
planesInLine(12); // prints There are 12 planes in line ������������

