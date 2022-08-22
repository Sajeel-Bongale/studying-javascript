/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649001#questions/13295178

    We will build a slider component for the testimonials.

    The general idea of the slider is that the all elements are arranged side by side and they all have a translateX
    property set to a factor of 100% based on their current position. As the position changes, the translateX values
    change accordingly.

    Let us start by putting all the slides side by side. -> See example 1

    The formula applies translateX value of 0% to first slide, translateX value of 100% to second, translateX value of
    200% to third and so on. This will put all the slides next to each other in a row. The slider has a overflow
    hidden property set so as to clip off all the other slides

    Now we will add handlers to the left and right movement buttons. We will first start with the right button
    handler. We will create a current slide variable to hold the index of the current slide. Using this variable
    we will also calculate values for the translateX properties when the slides move. -> See example 2

    Based on the above code, the slider will continue to move towards the right(by pushing images further to the
    left) as long as we keep pressing the right arrow button. We need to stop this behaviour when we reach the
    last slide. So we create a new variable that holds the index of the last slide. Then we reset the value of
    the currentSlide to 0 in case we reach the last slide.  -> See example 3

    Similar functionality will be needed when we move left. -> See example 4

 */

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const buttonLeft = document.querySelector('.slider__btn--left');
const buttonRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
let maxSlideIndex = slides.length;

// Example 1
const goToSlide = function (slide) {
    slides.forEach((s, index) => {
        s.style.transform = `translateX(${100 * (index - slide)}%)`;
    });
};

goToSlide(0);

// Example 2
buttonRight.addEventListener('click', function () {
    // Example 3
    if (currentSlide === maxSlideIndex - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);

});

// Example 4
buttonLeft.addEventListener('click', function () {
    if (currentSlide === 0) {
        currentSlide = maxSlideIndex - 1;
    } else {
        currentSlide--;
    }
    goToSlide(currentSlide);
});
