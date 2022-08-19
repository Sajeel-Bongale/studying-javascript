/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648995#notes

    In this section we are going to reveal elements as we scroll close to them. This effect can give your pages a
    very nice touch. You can, in fact, easily implement it without any external library.

    The animation itself actually comes from CSS. And so once more, we will actually achieve this by simply adding
    a class to each of these sections as we approach them.

    We will start by adding the section--hidden class to all the sections. What this class does is, it makes the
    sections' opacity to 0 and adds a translateY value of 8rem. This causes the content to be pushed down 8rem
    but without being visible, since opacity is 0. -> See

    When the user scrolls close to the content we will remove this class which will remove the opacity and
    translateY properties, thereby causing the sections to shift back up to its original position which is 0.

    We want to observe all the sections and want to trigger the load when any of the section comes close. We
    can observe all the sections by running a loop over the selected sections and marking them for
    observation. -> See example 1

    We will add the root as null because we want the intersection to be checked against the viewport. The
    threshold we will set to 15%. -> See example 2

    Once the callback for the intersection observer fires, we can utilize the target property from the entry
    to identify on which element the intersection observer fired. After finding the element we can remove the
    section--hidden class from it. -> See example 3

    One improvement that we can make here is to unobserve the observers after its intended effects have run
    properly. This is because once the removal of class has been done, we can cleanup the observers as they
    will keep running unnecessarily otherwise, in the background. -> See example 4

 */

const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    // Example 3
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');

    // Example 4
    sectionObserver.unobserve(entry.target);
};

// Example 2
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

// Example 1
allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})
