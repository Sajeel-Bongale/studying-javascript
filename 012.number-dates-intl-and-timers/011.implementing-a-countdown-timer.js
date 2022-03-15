/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648921#overview

    To create a countdown timer you need to make use of the setInterval function. This function will properly
    format the minutes and seconds of the clock and will also decrement it every second

    To get the minutes from the timer, you need to divide the time in seconds by 60. This gives a fractional
    value with the whole number part representing the remaining minutes. To obtain the seconds we use the
    remainder operator on the time in seconds.

    These values are however raw and need some processing before they can be output. We need to pad the values to
    be exactly of 2 digits as well as truncate the fractional part from the minutes.

    We will need to decrement the timer as well. We will also shut the timer down when the time in seconds reaches 0.
    We need to decrement the timer after the 0 check because if we do it before, the timer will shut down at 1 second
    and not 0. So move the decrement operation after the if check.

 */

// Timer implementation

let time = 65
const countdownTimer = setInterval(() => {
    let minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    let seconds = String(time % 60).padStart(2, '0');
    console.log(`${minutes}:${seconds}`);
    if (time === 0) {
        clearInterval(countdownTimer);
    }
    time--;
}, 1000);

