/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649003#questions/13295178

    In this section we will add the small dots below the slider that aid in click movement across the slider.

    We will also add keyboard events so that the slider can be operated using the left and right keys on the
    keyboard. -> See example 1

    We will now proceed with creating the dots and that is what the createDots function will do for us. We will create
    one dot for each slide. -> See example 2

    Then we will use event delegation to listen for clicks on the dots. See example 3

    Next we need to add a darker background colour to the dot of the active slide. -> See example 4

    Finally, one minor item that needs to be taken care of. That is, the first active slide should be highlighted
    when the page loads initially. -> See example 5

 */

const dotContainer = document.querySelector('.dots');

// Example 1
document.addEventListener('keydown', function (event) {
    event.key === 'ArrowLeft' && previousSlide();
    event.key === 'ArrowRight' && nextSlide();
});

// Example 2
const createDots = function () {
    slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML(
            'beforeend',
            `<button class="dots__dot" data-slide="${i}"></button>`
        )
    })
};

createDots();

// Example 4
const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');

};

// Example 5
activateDot(0);

// Example 3
dotContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('dots__dot')) {
        const target = event.target.dataset.slide;
        goToSlide(target);
        activateDot(target);
    }
})
