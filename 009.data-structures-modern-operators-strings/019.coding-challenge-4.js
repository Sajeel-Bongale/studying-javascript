/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648623#overview
 */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function (event) {
    const val = document.querySelector('textarea').value
    const split = val.split('\n');
    for(let [index, item] of split.entries()) {
        let sanitized = item.toLowerCase().trim();
        let [first, second] = sanitized.split('_');
        second = second.replace(second[0], second[0].toUpperCase());
        let result = first+second;
        let resultWithPad = result.padEnd(25, ' ');
        console.log(resultWithPad + "✅".repeat(index + 1))

    }

})